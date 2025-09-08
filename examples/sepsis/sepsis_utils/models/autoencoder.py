import numpy as np
import pandas as pd
import tqdm

import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from torch.cuda.amp import GradScaler
import torch.nn.functional as F

from ..dataset import TemporalDataset

from .utils import pad_collate, CausalConv1d, PositionalEncoding

device = 'cuda' if torch.cuda.is_available() else 'cpu'

class TimeSeriesAutoencoder(nn.Module):
    def __init__(self, architecture, ninp, nhead, nhid, nembed, nencoder, num_decoder_heads, dropout=0.5, device='cpu'):
        super().__init__()
        self.ninp = ninp
        self.nencoder = nencoder
        self.nhid = nhid
        self.nembed = nembed
        self.model_type = architecture
        self.input_emb = nn.Linear(ninp, nhid)
        if self.model_type == 'transformer':
            self.pos_encoder = PositionalEncoding(nhid, dropout)
            self.layer_norm = nn.LayerNorm(nhid)
            encoder_layer = nn.TransformerEncoderLayer(d_model=nhid, nhead=nhead, dim_feedforward=nhid*4, dropout=dropout, batch_first=True)
            self.transformer = nn.TransformerEncoder(encoder_layer, nencoder)
        elif self.model_type == 'cnn':
            self.cnn_layers = [
                CausalConv1d(nhid, nhid, nhead)
                for _ in range(nencoder)
            ]
            self.batch_norm = [
                nn.BatchNorm1d(nhid)
                for _ in range(nencoder)
            ]
        elif self.model_type == 'rnn':
            self.rnn = nn.LSTM(nhid, nhid, num_layers=nencoder, batch_first=True, dropout=dropout)
        elif self.model_type == 'dense':
            self.dense = nn.ModuleList([
                nn.Linear(nhid, nhid) for _ in range(nencoder)
            ])
        self.encoder_dropout = nn.Dropout(dropout)
        self.bottleneck = nn.Linear(nhid, nembed)
        self.decoder_dropout = nn.Dropout(dropout)
        self.decoder_heads = nn.ModuleList([
            nn.Linear(nhid, ninp)
            for _ in range(num_decoder_heads)
        ])
        self.device = device

    def encode(self, src):
        src = self.input_emb(src) * np.sqrt(self.ninp)
        if self.model_type == 'transformer':
            src = self.layer_norm(self.pos_encoder(src))
            output = self.transformer(src, is_causal=True, mask=nn.Transformer.generate_square_subsequent_mask(src.shape[1]).to(self.device))
        elif self.model_type == 'rnn': 
            h0 = torch.randn(self.nencoder, src.shape[0], self.nhid).to(self.device)
            c0 = torch.randn(self.nencoder, src.shape[0], self.nhid).to(self.device)
            output, (hn, cn) = self.rnn(src, (h0, c0))
        elif self.model_type == 'cnn':
            output = src.permute(0, 2, 1)
            for layer, norm in zip(self.cnn_layers, self.batch_norm):
                output = norm(F.relu(layer(self.encoder_dropout(output))))
            output = output.permute(0, 2, 1)
        else:
            output = src
            for i, layer in enumerate(self.dense):
                output = layer(self.decoder_dropout(output))
                if i < len(self.dense) - 1: output = F.relu(output)
        return output
    
    def forward(self, src):
        # src = src.permute(1, 0, 2)
        output = self.encode(src)
        # for layer in self.decoder:
        #     output = self.decoder_dropout(F.relu(layer(output)))
        output = tuple(layer(self.decoder_dropout(output)) for layer in self.decoder_heads) #self.decoder2(output)
        # output = output.permute(1, 0, 2)
        return output
    
class TimeSeriesAutoencoderTrainer:
    def __init__(self, train_data, val_data, test_data,
                 id_col="id", time_col="time",
                 architecture='transformer', nhead=4, nhid=128, nembed=32, 
                 nencoder=2, dropout=0.1, device='cpu', lr=5e-4,
                 lr_decay=0.98, n_warmup=2, mask_gamma=1, 
                 mask_prob=0.05,
                 noise_factor=0.05,
                 checkpoint_path=None,
                 past_value_reconstruction=False,
                 first_value_reconstruction=False,
                train_weights=None, val_weights=None, test_weights=None):
        ninp = train_data.shape[1] - 2
        self.sequence_length = train_data[time_col].groupby(train_data[id_col]).count().max()
        self.train_dataset = self.make_dataset(train_data,
                                               id_col=id_col,
                                               time_col=time_col,
                                             noise_factor=noise_factor,
                                             mask_prob=mask_prob,
                                             weights=train_weights)
        self.val_dataset = self.make_dataset(val_data,
                                               id_col=id_col,
                                               time_col=time_col,
                                             weights=val_weights)
        self.test_dataset = self.make_dataset(test_data,
                                               id_col=id_col,
                                               time_col=time_col,
                                             weights=test_weights)
        self.device = device
        self.model = TimeSeriesAutoencoder(architecture=architecture, 
                                           ninp=ninp, 
                                           nhead=nhead, 
                                           nhid=nhid, 
                                           nembed=nembed, 
                                           nencoder=nencoder, 
                                           num_decoder_heads=1 + int(past_value_reconstruction) + int(first_value_reconstruction), 
                                           dropout=dropout, 
                                           device=self.device).to(self.device)
        self.past_value_reconstruction = past_value_reconstruction
        self.first_value_reconstruction = first_value_reconstruction
        # self.change_lambda = change_lambda
        self.optimizer = torch.optim.Adam(self.model.parameters(), lr=lr, weight_decay=0.1)
        scheduler1 = torch.optim.lr_scheduler.LinearLR(self.optimizer, total_iters=n_warmup)
        scheduler2 = torch.optim.lr_scheduler.StepLR(self.optimizer, 1, gamma=lr_decay)
        self.scheduler = torch.optim.lr_scheduler.SequentialLR(self.optimizer, schedulers=[scheduler1, scheduler2], milestones=[n_warmup])
        # self.scheduler = torch.optim.lr_scheduler.CyclicLR(self.optimizer, lr, 0.05, mode='triangular2', cycle_momentum=False, step_size_up=1000)
        self.criterion = nn.MSELoss(reduction='none')
        self.checkpoint_path = checkpoint_path
        self.mask_gamma = mask_gamma
        
    def load_checkpoint(self):
        checkpoint = torch.load(self.checkpoint_path, map_location=self.device)
        self.model.load_state_dict(checkpoint['model'])
        self.optimizer.load_state_dict(checkpoint['optimizer'])
        self.scheduler.load_state_dict(checkpoint['scheduler'])
        
    def mask_loss(self, loss, weights, lengths, exclude_start=0):
        loss_mask = torch.arange(loss.shape[1]).to(self.device)[None, :] < lengths[:, None]
        if exclude_start > 0:
            loss_mask[:,:exclude_start] = 0
        loss_masked = (loss * weights).where(loss_mask.unsqueeze(-1), torch.tensor(0.0).to(self.device))
        return loss_masked.sum() / (loss_mask.sum() + 1e-3)
    
    def fit(self, epochs=20, batch_size=32, patience=10, loss_callback=None):        
        train_loader = DataLoader(self.train_dataset, batch_size=batch_size, shuffle=True, collate_fn=pad_collate)
        val_loader = DataLoader(self.val_dataset, batch_size=batch_size, collate_fn=pad_collate)
        num_without_improvement = 0
        best_loss = 1e9
        use_amp = self.model.model_type == 'transformer' and self.device == 'cuda'
        scaler = GradScaler(enabled=use_amp)
        for epoch in range(int(np.ceil(epochs))):
            print(f"Epoch {epoch}")
            bar = tqdm.tqdm(train_loader)
            # bar = train_loader
            total_loss = 0.0
            total_batches = 0
            self.model.train()
            for batch_idx, (inputs, outputs, weights, lengths) in enumerate(bar):
                if epoch + batch_idx / len(train_loader) >= epochs: break
                self.optimizer.zero_grad()
                with torch.autocast(device_type=self.device, dtype=torch.bfloat16 if self.device == 'cpu' else torch.float16, enabled=use_amp):
                    inputs = inputs.to(self.device)
                    weights = weights.to(self.device)
                    lengths = lengths.to(self.device)
                    preds = self.model(inputs)
                    loss = self.mask_loss(self.criterion(preds[0], inputs), weights, lengths)
                    output_idx = 1
                    if self.past_value_reconstruction:
                        loss += self.mask_loss(self.criterion(preds[output_idx], torch.cat([torch.zeros(inputs.shape[0], 6, inputs.shape[2]).to(self.device), inputs[:,:-6,:]], 1)), 
                                               torch.cat([torch.zeros(weights.shape[0], 6, weights.shape[2]).to(self.device), weights[:,:-6,:]], 1), 
                                               lengths, 6)
                        output_idx += 1
                    if self.first_value_reconstruction:
                        loss += self.mask_loss(self.criterion(preds[output_idx], torch.tile(inputs[:,0:1,:], (1, inputs.shape[1], 1))), 
                                               torch.tile(weights[:,0:1,:], (1, weights.shape[1], 1)), lengths)
                    # if self.change_lambda > 0:
                    #     loss += self.change_lambda * torch.linalg.norm(inputs - torch.cat([torch.zeros(inputs.shape[0], 1, inputs.shape[2]), inputs[:,:-1,:]], 1), 2, 2)
                scaler.scale(loss).backward()
                # torch.nn.utils.clip_grad_norm_(self.model.parameters(), 10.0)
                scaler.step(self.optimizer)
                scaler.update()
                total_loss += loss.item()
                total_batches += 1
                bar.set_description(f"{total_loss / total_batches:.6f}")
            train_loss = total_loss / total_batches
            self.scheduler.step()
            self.train_dataset.mask_prob = min(self.train_dataset.mask_prob * self.mask_gamma, 0.6)
            self.train_dataset.noise_factor = min(self.train_dataset.noise_factor * self.mask_gamma, 1.0)
                
            self.model.eval()
            with torch.no_grad():
                bar = tqdm.tqdm(val_loader)
                # bar = val_loader
                total_losses = [0] * len(self.model.decoder_heads)
                total_batches = 0
                for inputs, outputs, weights, lengths in bar:
                    with torch.autocast(device_type=self.device, dtype=torch.bfloat16 if self.device == 'cpu' else torch.float16, enabled=use_amp):
                        inputs = inputs.to(self.device)
                        lengths = lengths.to(self.device)
                        weights = weights.to(self.device)
                        preds = self.model(inputs)
                        total_losses[0] += self.mask_loss(self.criterion(preds[0], inputs), weights, lengths).item()
                        output_idx = 1
                        if self.past_value_reconstruction:
                            total_losses[output_idx] += self.mask_loss(self.criterion(preds[output_idx], torch.cat([torch.zeros(inputs.shape[0], 6, inputs.shape[2]).to(self.device), inputs[:,:-6,:]], 1)), 
                                                                       torch.cat([torch.zeros(weights.shape[0], 6, weights.shape[2]).to(self.device), weights[:,:-6,:]], 1), 
                                                                       lengths, 6)
                            output_idx += 1
                        if self.first_value_reconstruction:
                            total_losses[output_idx] += self.mask_loss(self.criterion(preds[output_idx], torch.tile(inputs[:,0:1,:], (1, inputs.shape[1], 1))), 
                                                                       torch.tile(weights[:,0:1,:], (1, weights.shape[1], 1)), lengths)
                        total_batches += 1

                        loss_strings = [f"{l / total_batches:.6f}" for l in total_losses]
                        bar.set_description(f"Loss: {', '.join(loss_strings)}")
                    
            total_loss = sum(total_losses) / total_batches
            if loss_callback is not None:
                loss_callback(train_loss, total_loss)
            if total_loss <= best_loss:
                # print("New best:", total_loss)
                num_without_improvement = 0
                best_loss = total_loss
                if self.checkpoint_path is not None:
                    self.save(self.checkpoint_path)
            else:
                num_without_improvement += 1
                if num_without_improvement == patience:
                    # print("Early stop")
                    break
        return best_loss
    
    def save(self, checkpoint_path):
        torch.save({
            'model': self.model.state_dict(),
            'optimizer': self.optimizer.state_dict(),
            'scheduler': self.scheduler.state_dict()
        }, checkpoint_path)
    
    def make_dataset(self, df, id_col='id', time_col='time', **kwargs):
        return TemporalDataset(df[id_col].values,
                               df.drop(columns=[id_col, time_col]).values,
                               None,
                               **kwargs)

    def encode(self, dataset, batch_size=32):
        self.model.eval()
        loader = DataLoader(dataset, batch_size=batch_size, collate_fn=pad_collate)
        with torch.no_grad():
            bar = tqdm.tqdm(loader)
            all_predictions = []
            for inputs, outputs, weights, lengths in bar:
                inputs = inputs.to(self.device)
                lengths = lengths.to(self.device)
                preds = self.model.encode(inputs)
                all_predictions.append(np.concatenate([x[:l].cpu().numpy() for x, l in zip(preds, lengths)]))
        all_predictions = np.concatenate(all_predictions)
        return all_predictions

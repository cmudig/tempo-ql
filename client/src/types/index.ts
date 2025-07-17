// Shared types for the Tempo-QL widget frontend

export interface WidgetModel {
  counter: number;
  message: string;
  // Add more fields as needed for your widget's model
}

export interface ActionButton {
  label: string;
  icon?: string;
  colorClass?: string;
  onClick: () => void;
} 
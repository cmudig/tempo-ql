from ..evaluator import QueryEngine
from ..data_types import *
import numpy as np
import pandas as pd
from .dataset import TempoCSVDataset

if __name__ == '__main__':
    ids = [100, 101, 102]
    attributes = AttributeSet(pd.DataFrame({
        'start': [20, 31, 112],
        'end': [91, 87, 168],
        'a1': [3, 5, 1],
        'a2': [10, pd.NA, 42],
        'a3': [61, 21, pd.NA]
    }, index=ids))

    events = EventSet(pd.DataFrame([{
        'id': np.random.choice(ids),
        'time': np.random.randint(0, 100),
        'eventtype': np.random.choice(['e1', 'e2', 'e3']),
        'value': np.random.uniform(0, 100)
    } for _ in range(100)]))

    intervals = IntervalSet(pd.DataFrame([{
        'id': np.random.choice(ids),
        'starttime': np.random.randint(0, 50),
        'endtime': np.random.randint(50, 100),
        'intervaltype': np.random.choice(['i1', 'i2']),
        'value': np.random.uniform(0, 100)
    } for _ in range(10)]))

    dataset = QueryEngine(TempoCSVDataset([attributes], [events], [intervals]))
    print(dataset.query("{a2} impute mean"))
    print(dataset.query("{name contains /[12]/i; type = event}"))
    # print(dataset.query("(min e2: min {'e1', e2} from now - 30 seconds to now, max e2: max {e2} from now - 30 seconds to now) at every {e1} from {start} to {end}"))
    # print(dataset.query("min {e1} from #now - 30 seconds to #now cut 3 quantiles impute 'Missing' at every {e1} from #mintime to #maxtime"))
    # print(dataset.query("myagg: mean ((now - (last time({e1}) from -1000 to now)) at every {e1} from 0 to {end}) from {start} to {end}"))
    # print(dataset.query("(my_age: (last {e1} from #now - 10 sec to #now) impute 'Missing') every 3 sec from #mintime to #maxtime"))
    # print(dataset.query("mean {e1} * 3 from now - 30 s to now"))
    # print(dataset.query("max(mean {e2} from now - 30 seconds to now, mean {e1} from now - 30 seconds to now) at every {e2} from {start} to {end}"))
    # print(events.get('e1'))
    print(dataset.query("{name = e1} - (last {e1} before {e1})"))
    # print(dataset.query("mean {e1} where {e1} > (last {e1} from #now - 30 sec to #now) from #now to #now + 30 sec every 30 sec from {start} to {end}", use_cache=False))
    # print(dataset.query("mean (case when {e1} > (last {e2} from #now - 30 sec to #now) then {e1} else 0 end) from #now to #now + 30 sec every 30 sec from {start} to {end}", use_cache=False))
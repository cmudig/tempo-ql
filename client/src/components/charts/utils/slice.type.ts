export interface Histogram {
  [key: string]: number;
}

export interface SliceMetric {
  type: 'binary' | 'continuous' | 'categorical' | 'count' | 'numeric';
  value?: number;
  length?: number;
  missingness?: number;
  mean?: number;
  share?: number;
  count?: number;
  total?: number;
  hist?: Histogram;
  counts?: { [key: string]: number };
}

export type SliceMetricInfo = {
  visible: boolean;
  scale?: (v: number) => number;
  color?: string;
  colorScale?: (v: number) => string;
  order?: any[];
};

export interface SliceFeatureBase {
  type: any;
}

export interface SliceFeature extends SliceFeatureBase {
  col: any;
  vals: any;
}

export interface SliceFeatureNegation extends SliceFeatureBase {
  feature: SliceFeatureBase;
}

export interface SliceFeatureAnd extends SliceFeatureBase {
  lhs: SliceFeatureBase;
  rhs: SliceFeatureBase;
}

export interface SliceFeatureOr extends SliceFeatureBase {
  lhs: SliceFeatureBase;
  rhs: SliceFeatureBase;
}

export interface Slice {
  stringRep: string;
  rawFeature: SliceFeatureBase;
  feature: SliceFeatureBase;
  scoreValues: any;
  isEmpty: boolean;
  metrics?: { [key: string]: SliceMetric | { [key: string]: SliceMetric } };
}

export enum SliceSearchControl {
  containsSlice = 'contains_slice',
  containedInSlice = 'contained_in_slice',
  similarToSlice = 'similar_to_slice',
  subsliceOfSlice = 'subslice_of_slice',
}

export const SliceControlStrings: { [key: string]: string } = {
  [SliceSearchControl.containsSlice]: 'Contains',
  [SliceSearchControl.containedInSlice]: 'Contained in',
  [SliceSearchControl.similarToSlice]: 'Similar to',
  [SliceSearchControl.subsliceOfSlice]: 'Subslice of',
};

export type QueryResult = {
  name?: string;
  type?: string;
  ids?: {
    count?: SliceMetric;
    count_per_trajectory?: SliceMetric;
  };
  types?: SliceMetric;
  missingness?: {
    rate?: SliceMetric;
    rate_per_trajectory?: SliceMetric;
  };
  values?: SliceMetric;
  occurrences?: SliceMetric;
  durations?: SliceMetric;
};

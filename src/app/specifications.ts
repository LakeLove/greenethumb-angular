export interface Specifications {
  ligneous_type: string;
  growth_form: string;
  growth_habit: string;
  growth_rate: string;
  average_height: AvgHeight;
  maximum_height: MaxHeight;
  nitrogen_fixation: string;
  shape_and_orientation: string;
  toxicity: string;
}

class AvgHeight {
  cm: number;
}

class MaxHeight {
  cm: number;
}

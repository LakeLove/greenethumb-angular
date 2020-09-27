export interface Growth {
  days_to_harvest: number;
  description: string;
  sowing: string;
  ph_maximum: number;
  ph_minimum: number;
  light: number;
  atmospheric_humidity: number;
  growth_months: string[];
  bloom_months: string[];
  fruit_months: string[];
  row_spacing: RowSpacing;
  spread: Spread;
  minimum_precipitation: MinPrecip;
  maximum_precipitation: MaxPrecip;
  minimum_root_depth: MinRootDepth;
  minimum_temperature: MinTemp;
  maximum_temperature: MaxTemp;
  soil_nutriments: number;
  soil_salinity: number;
  soil_texture: number;
  soil_humidity: number;
}

class RowSpacing {
  cm: number;
}

class Spread {
  cm: number;
}

class MinPrecip {
  mm: number;
}

class MaxPrecip {
  mm: number;
}

class MinRootDepth {
  cm: number;
}

class MinTemp {
  deg_f: number;
  deg_c: number;
}

class MaxTemp {
  deg_f: number;
  deg_c: number;
}

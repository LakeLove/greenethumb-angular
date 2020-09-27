import {Growth} from "./growth";
import {Images} from "./images";
import {Links} from "./links";
import {Specifications} from "./specifications";

export interface Plant {
  id: number;
  author: string;
  bibliography: string;
  common_name: string;
  common_names: CommonNames;
  // distribution: Distribution;
  // distributions: Distributions;
  edible_part: string[];
  edible: boolean;
  duration: string[];
  family: string;
  family_common_name: string;
  flower: Flower;
  foliage: Foliage;
  fruitOrSeed: FruitOrSeed;
  genus: string;
  genus_id: number;
  growth: Growth;
  image_url: string;
  images: Images;
  links: Links;
  observations: string;
  rank: string;
  scientific_name: string;
  slug: string;
  specifications: Specifications;
  status: string;
  // sources: Sources[];
  // synonyms: Synonyms[];
  vegetable: boolean;
  year: number;
}

class CommonNames {
  es: string[];
  fr: string[];
  en: string[];
}

class Flower {
  color: string[];
  conspicuous: boolean;
}

class Foliage {
  texture: string;
  color: string[];
  leaf_retention: boolean;
}

class FruitOrSeed {
  conspicuous: boolean;
  color: string[];
  shape: string;
  seed_persistence: boolean;
}

// export interface Plant {
// id: number;
// author: string;
// bibliography: string;
// common_name: string;
// family: string;
// family_common_name: string;
// genus: string;
// genus_id: number;
// image_url: string;
// links: Links;
// rank: string;
// scientific_name: string;
// slug: string;
// status: string;
// synonyms: string[];
// year: number;
// }

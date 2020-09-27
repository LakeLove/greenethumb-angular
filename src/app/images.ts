export interface Images {
  id: number;
  image_url: string;
  copyright: string;
}

class FlowerImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}

class LeafImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}

class HabitImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}
class FruitImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}
class BarkImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}
class OtherImage implements Images {
  copyright: string;
  id: number;
  image_url: string;
}

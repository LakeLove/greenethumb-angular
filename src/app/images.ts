export interface Images {
  flowers: Image[];
  leaf: Image[];
  habit: Image[];
  fruit: Image[];
  bark: Image[];
  other: Image[];
}

class Image {
  id: number;
  image_url: string;
  copyright: string;
}
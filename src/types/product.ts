export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
  ratingsAverage: number;
  thumbnail: string;
  images: string[];
  variations?: ProductVariation[];
  attributes?: ProductAttribute;
  isDraft: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductVariation {
  name: string;
  price: number;
  images: string[];
}

export interface ProductAttribute {
  [key: string]: string | number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  parent?: Category;
}

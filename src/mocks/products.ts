import { Product } from '@/types/product';
import { mockCategories } from './categories';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Mô hình Luffy 3D',
    slug: 'mo-hinh-luffy-3d',
    description: 'Mô hình Luffy 3D',
    price: 6,
    quantity: 10,
    category: mockCategories.find((category) => category.id === '1')!,
    ratingsAverage: 4.5,
    thumbnail:
      'https://i.pinimg.com/736x/f6/a6/99/f6a69928a69ee784852834b4ed4cb90b.jpg',
    images: [
      'https://i.pinimg.com/736x/a5/d8/05/a5d805dfdf5f7bc6e80826cf5e3e056d.jpg',
      'https://i.pinimg.com/736x/60/7a/af/607aaf30cac00cc32fda408ddca4362b.jpg',
      'https://i.pinimg.com/736x/d5/f4/32/d5f4320f339960c4ae43dc52e04c516f.jpg',
    ],
    isDraft: false,
  },
  {
    id: '2',
    name: 'Mô hình Zoro 3D',
    slug: 'mo-hinh-zoro-3d',
    description: 'Mô hình Zoro 3D',
    price: 6.25,
    quantity: 10,
    category: mockCategories.find((category) => category.id === '1')!,
    ratingsAverage: 4.5,
    thumbnail:
      'https://i.pinimg.com/736x/85/8d/b5/858db52f0eac26a60f486707fa630816.jpg',
    images: [
      'https://i.pinimg.com/736x/de/4f/8c/de4f8c371cffce67e00789d689474aba.jpg',
      'https://i.pinimg.com/736x/53/e0/11/53e0115b23239adec76da30acbcc06b6.jpg',
    ],
    isDraft: false,
  },
];

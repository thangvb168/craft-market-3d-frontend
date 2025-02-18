import { Category } from '@/types/product';

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Mô hình',
    description: 'Mô hình 3D',
    slug: 'mo-hinh',
  },
  {
    id: '2',
    name: 'Tranh treo tường',
    description: 'Tranh treo tường',
    slug: 'tranh-treo-tuong',
  },
  {
    id: '3',
    name: 'Mô hình Anime',
    description: 'Mô hình Anime',
    slug: 'mo-hinh-anime',
    parentId: '1',
  },
  {
    id: '4',
    name: 'Mô hình One Piece',
    description: 'Mô hình One Piece',
    slug: 'mo-hinh-one-piece',
    parentId: '1',
  },
  {
    id: '5',
    name: 'Mô hình Naruto',
    description: 'Mô hình Naruto',
    slug: 'mo-hinh-naruto',
    parentId: '1',
  },
  {
    id: '6',
    name: 'Mô hình Dragon Ball',
    description: 'Mô hình Dragon Ball',
    slug: 'mo-hinh-dragon-ball',
    parentId: '1',
  },
  {
    id: '7',
    name: 'Tranh Minimalist',
    description: 'Tranh Minimalist',
    slug: 'tranh-minimalist',
    parentId: '2',
  },
  {
    id: '8',
    name: 'Tranh One Piece',
    description: 'Tranh One Piece',
    slug: 'tranh-one-piece',
    parentId: '2',
  },
  {
    id: '9',
    name: 'Tranh Naruto',
    description: 'Tranh Naruto',
    slug: 'tranh-naruto',
    parentId: '2',
  },
  {
    id: '10',
    name: 'Tranh Dragon Ball',
    description: 'Tranh Dragon Ball',
    slug: 'tranh-dragon-ball',
    parentId: '2',
  },
];

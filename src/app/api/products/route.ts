import { mockProducts } from '@/mocks/products';
import { NextRequest, NextResponse } from 'next/server';

const getAllProducts = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get('query');
  const category = req.nextUrl.searchParams.get('category');

  console.log('query:', query);
  console.log('category:', category);

  const products = mockProducts;

  return NextResponse.json(products);
};

export const GET = getAllProducts;

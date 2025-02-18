import { mockProducts } from '@/mocks/products';
import { NextRequest, NextResponse } from 'next/server';

const getProductDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } },
) => {
  const { id } = await params;

  const product = mockProducts.find((p) => p.id === id);

  return NextResponse.json(product);
};

export const GET = getProductDetails;

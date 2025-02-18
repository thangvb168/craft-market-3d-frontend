import { mockCategories } from '@/mocks/categories';
import { NextRequest, NextResponse } from 'next/server';

const getCategoryDetails = async (
  req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const { slug } = await params;

  const category = mockCategories.find((category) => category.slug === slug);

  return NextResponse.json(category || {});
};

export const GET = getCategoryDetails;

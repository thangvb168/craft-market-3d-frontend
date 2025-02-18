import { mockCategories } from '@/mocks/categories';
import { NextRequest, NextResponse } from 'next/server';

const getAllCategories = async (req: NextRequest) => {
  console.log('getAllCategories');
  const categories = mockCategories;

  return NextResponse.json(categories);
};

export const GET = getAllCategories;

import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '@/types/product';

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = async ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductGrid;

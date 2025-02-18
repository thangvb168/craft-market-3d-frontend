import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white">
      <div className="absolute right-2 top-2 z-10">
        <span className="animate-bounce rounded-full bg-red-500 px-2 py-1 text-xs font-bold text-white">
          HOT!
        </span>
      </div>

      <div className="relative h-48 w-full">
        {product.thumbnail && (
          <Image
            src={product.thumbnail}
            alt="Image"
            fill
            className="object-contain p-2"
            loading="lazy"
          />
        )}
      </div>

      <div className="p-4">
        <h3 className="mb-1 line-clamp-2 h-10 text-sm font-medium">
          {product.name}
        </h3>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-red-500">
              ${(product.price || 0).toFixed(2)}
            </span>
            <span className="text-sm text-gray-400 line-through">
              ${((product.price || 0) * 5).toFixed(2)}
            </span>
          </div>
          <div className="mb-2 text-xs font-semibold text-green-500">
            {Math.floor(100 + Math.random() * 100)}+ sold in last 24h
          </div>
          <Link
            href={`/product/${product.id}`}
            className="w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 py-1 text-center text-sm font-bold text-white transition-all hover:brightness-110"
          >
            GRAB IT NOW!
          </Link>
          <div className="mt-1 animate-pulse text-center text-xs text-red-500">
            ⚡ Limited time offer!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

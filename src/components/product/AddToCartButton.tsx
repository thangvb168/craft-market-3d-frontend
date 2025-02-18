'use client';

import { useCart } from '@/context/CartProvider';
import { Product } from '@/types/product';
import { Loader2, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';

type AddToCartButtonProps = {
  product: Product;
};

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { updateCart } = useCart();

  const [isLoading, setIsLoading] = useState(false);
  const handleAddToCart = async () => {
    setIsLoading(true);
    updateCart(product, 1);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={
        'mt-6 flex w-full transform items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 py-4 text-xl font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:from-red-600 hover:to-red-700 active:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:scale-100 disabled:hover:from-red-500 disabled:hover:to-red-600 disabled:active:scale-100'
      }
    >
      {isLoading ? (
        <>
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Adding to Cart...</span>
        </>
      ) : (
        <>
          <ShoppingCart />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCartButton;

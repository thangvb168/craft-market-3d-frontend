import { useCart } from '@/context/CartProvider';
import { CartItem as CartItemType } from '@/types/cart';
import React from 'react';
import Image from 'next/image';

type CartItemProps = {
  item: CartItemType;
};

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart, updateCart } = useCart();

  const isFreeItem = item.product.price === 0;

  return (
    <div
      key={`cart-item-${item.product.id}`}
      className="flex gap-4 p-4 hover:bg-gray-50"
    >
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-medium text-gray-900">
          {item.product.name}
        </h3>
        <div className="mt-1 text-sm text-gray-500">
          {isFreeItem ? (
            <span className="font-medium text-emerald-600">FREE</span>
          ) : (
            <span>${item.product.price}</span>
          )}
        </div>
        <div className="mt-2 flex items-center gap-3">
          {isFreeItem ? (
            <div className="text-sm font-medium text-emerald-600">
              Prize Item
            </div>
          ) : (
            <>
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateCart(item.product, Number(e.target.value))
                }
                className="rounded-md border bg-white px-2 py-1 text-sm"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option
                    key={`cart-qty-slct-${item.product.id}-${num}`}
                    value={num}
                  >
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeFromCart(item.product)}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

'use client';

import { useCart } from '@/context/CartProvider';
import { cn } from '@/utils/mergeClass';
import { Loader2, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';

type SideCartProps = {
  visible: boolean;
  onClose: () => void;
};

const SideCart = ({ visible, onClose }: SideCartProps) => {
  const { items, countAllItems } = useCart();
  const router = useRouter();

  const sideCartRef = useRef<HTMLDivElement>(null);
  const [loadingProceed, setLoadingProceed] = useState<boolean>(false);

  const countSubTotal = () => {
    return items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  };

  const countShipping = () => {
    return 0;
  };

  const countTotal = () => {
    return countSubTotal() + countShipping();
  };

  const handleProceedToCheckout = () => {
    setLoadingProceed(true);
    setTimeout(() => {
      setLoadingProceed(false);
      onClose();
      router.push('/checkout');
    }, 1500);
  };

  const handleGoToCart = () => {
    onClose();
    router.push('/cart');
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sideCartRef.current &&
        !sideCartRef.current.contains(e.target as Node) &&
        visible
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [visible]);

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" />
      )}

      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-full transform bg-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-[400px]',
          visible ? 'translate-x-0' : 'translate-x-full',
        )}
        ref={sideCartRef}
      >
        <div className="flex h-full flex-col">
          {/* Cart Header */}
          <div className="flex items-center justify-between border-b bg-gray-50 p-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <span className="rounded-full bg-gray-200 px-2 py-1 text-sm font-medium">
                {countAllItems()}
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 transition-colors hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {countAllItems() === 0 ? (
              <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                  <ShoppingCart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Your cart is empty
                </h3>
                <p className="mb-6 text-gray-500">
                  Looks like you have not added any items to your cart yet!
                </p>
                <Link
                  href="/"
                  onClick={onClose}
                  className="rounded-full bg-black px-6 py-2 font-medium text-white transition-colors hover:bg-gray-900"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="divide-y">
                {items.map((item) => (
                  <CartItem key={'cart-item-' + item.product.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {countAllItems() > 0 && (
            <div className="border-t">
              {/* Order summary & checkout */}
              <div className="space-y-4 p-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${countSubTotal()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-medium">
                      {countShipping() > 0 ? 'Calculated at checkout' : 'FREE'}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-lg font-bold">${countTotal()}</span>
                  </div>

                  {/* Proceed to checkout button */}
                  <button
                    className="flex w-full items-center justify-center rounded-full bg-orange-500 py-4 font-bold text-white transition-colors hover:scale-105"
                    onClick={handleProceedToCheckout}
                    disabled={loadingProceed}
                  >
                    {loadingProceed ? (
                      <div className="flex items-center gap-1">
                        Navigating to checkout...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    ) : (
                      'Proceed to Checkout'
                    )}
                  </button>

                  {/* Go to cart button */}
                  <button
                    className="bottom-1 mt-2 flex w-full items-center justify-center rounded-full border-2 border-black/40 py-4 font-bold text-white transition-colors hover:border-black hover:shadow-md"
                    onClick={handleGoToCart}
                  >
                    <span className="text-black">Go to cart</span>
                  </button>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>🔒</span>
                      <span>Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>🔄</span>
                      <span>30-day returns</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>💳</span>
                      <span>All major payment methods accepted</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideCart;

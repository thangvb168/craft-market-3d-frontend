'use client';

import { signOut } from 'next-auth/react';
import { IUser } from '@/types/next-auth';
import { cn } from '@/utils/mergeClass';
import { AlignJustifyIcon, Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-black py-2">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          FREE SHIPPING ON ORDERS OVER $50 - USE CODE: FREESHIP
        </span>
      </div>
    </div>
  );
};

type HeaderProps = {
  user: IUser | undefined;
};

const Header = ({ user }: HeaderProps) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollUp = currentScrollY < prevScrollY;

      if (scrollUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }

      setPrevScrollY(currentScrollY);
    };

    setPrevScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div
        className={cn(
          'w-full transform bg-white shadow-md transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <AnnouncementBar />

        <div className="flex w-full items-center justify-between border-gray-100 bg-white/80 py-3 shadow-sm backdrop-blur-sm sm:py-4">
          <div className="jb ic container mx-auto flex px-8">
            {/* LEFT */}
            <div className="flex flex-1 items-center justify-start gap-4 sm:gap-6">
              <button className="text-gray-700 hover:text-gray-900 md:hidden">
                <AlignJustifyIcon />
              </button>

              <nav className="hidden gap-4 text-sm font-medium md:flex lg:gap-6">
                <Link href="#">Shop</Link>
                <Link href="#">New Arrivals</Link>
                <Link href="#">Sale</Link>
              </nav>
            </div>
            {/* END LEFT */}

            {/* CENTER */}
            <Link href="#" className="absolute left-1/2 -translate-x-1/2">
              <span className="text-xl font-bold tracking-tight sm:text-2xl">
                DEAL
              </span>
            </Link>
            {/* END CENTER */}

            {/* RIGHT */}
            <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
              <button className="hidden text-gray-700 hover:text-gray-900 sm:block">
                <Search />
              </button>

              {user ? (
                <>
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className="hidden text-sm text-gray-700 md:block">
                      {user.name.split(' ')[0]}
                    </span>
                    <Link
                      href="#"
                      className="text-xs font-medium text-gray-700 hover:text-gray-900 sm:text-sm"
                      onClick={async (e) => {
                        e.preventDefault();
                        await signOut();
                        router.refresh();
                      }}
                    >
                      Sign Out
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link href="/auth/login">Login</Link>
                  <Link href="/auth/register">Register</Link>
                </>
              )}

              <div className="relative text-gray-700 hover:text-gray-900">
                <ShoppingCart />
                <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black text-[10px] text-white sm:h-4 sm:w-4 sm:text-xs">
                  0
                </span>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

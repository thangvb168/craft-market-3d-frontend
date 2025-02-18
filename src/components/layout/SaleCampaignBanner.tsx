'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const SaleCampaignBanner = () => {
  const router = useRouter();

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-600 py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-white sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="animate-bounce text-xl font-bold sm:text-2xl">
              🔥
            </span>
            <div className="text-sm font-bold sm:text-base">
              FLASH SALE ENDS IN:
            </div>
            <div className="rounded bg-white/20 px-2 py-1 font-mono font-bold">
              23:59:59
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">⚡</span>
            <span className="animate-pulse font-bold text-yellow-200">
              UP TO 95% OFF!
            </span>
          </div>

          <button
            className="rounded-full bg-white px-4 py-1 text-sm font-bold text-red-600 shadow-lg transition-colors hover:bg-yellow-100"
            onClick={() => {
              router.push('/');
            }}
          >
            SHOW NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleCampaignBanner;

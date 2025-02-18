import SaleCampaignBanner from '@/components/layout/SaleCampaignBanner';
import ProductGrid from '@/components/product/ProductGrid';
import React, { Suspense } from 'react';
import MainLoading from './loading';

const MainPage = async () => {
  const products = await fetch('http://localhost:3000/api/products').then(
    (res) => res.json(),
  );

  return (
    <div>
      <div className="">
        <SaleCampaignBanner />
      </div>

      <section className="container mx-auto py-8">
        <Suspense fallback={<MainLoading />}>
          <ProductGrid products={products} />
        </Suspense>
      </section>
    </div>
  );
};

export default MainPage;

import SaleCampaignBanner from '@/components/layout/SaleCampaignBanner';
import ProductGrid from '@/components/product/ProductGrid';
import React from 'react';

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const [category, products] = await Promise.all([
    fetch(`http://localhost:3000/api/categories/${slug}`).then((res) =>
      res.json(),
    ),
    fetch(`http://localhost:3000/api/products?category=${slug}`).then((res) =>
      res.json(),
    ),
  ]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <SaleCampaignBanner />

      <div className="bg-red-50 p-4">
        <div className="container mx-auto">
          <h1 className="mb-2 text-center text-2xl font-bold text-red-600 md:text-3xl">
            {category.title} - UP TO 90% OFF! 🔥
          </h1>
          <p className="animate-pulse text-center text-sm text-red-500 md:text-base">
            ⚡ Flash Sale Ending Soon! ⏰ Limited Time Only
          </p>
          <p className="mt-2 text-center text-xs text-gray-600">
            {category.description}
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 py-3">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">⭐️</span>
              <span>Top Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-600">💰</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>

      <section className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500">
            🎉 {products.length} Amazing Deals Available Now!
          </p>
        </div>

        <ProductGrid products={products} />
      </section>
    </div>
  );
};

export default CategoryPage;

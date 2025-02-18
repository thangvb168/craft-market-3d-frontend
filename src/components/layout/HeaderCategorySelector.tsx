import { Category } from '@/types/product';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderCategorySelector = async () => {
  const categories: Category[] = await fetch(
    `http://localhost:3000/api/categories`,
  ).then((res) => res.json());

  return (
    <div className="relative inline-block">
      <button className="group peer flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
        Categories
        <ChevronDown
          size={16}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>
      <div className="duration invisible absolute left-0 top-full pt-2 opacity-0 transition-all hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
        <div className="w-64 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl">
          <div className="py-2">
            {categories.map((category) => {
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="block px-4 py-3 text-sm text-gray-700 transition-colors duration-100 hover:bg-gray-50 hover:text-gray-900"
                  prefetch
                >
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategorySelector;

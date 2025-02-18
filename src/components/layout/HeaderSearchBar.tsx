import React from 'react';
import Form from 'next/form';
import { Search } from 'lucide-react';

const HeaderSearchBar = () => {
  const handleSubmit = (event: React.FormEvent) => {
    const form = event.target as HTMLFormElement;
    const query = form.query.value.trim();
    if (!query) {
      event.preventDefault();
      //   Notify user to enter a query
      alert('Please enter a query');
    }
  };

  return (
    <Form action="/search" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
          <Search />
        </div>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-32 rounded-md border border-gray-200 py-1 pl-8 pr-2 text-sm transition-colors focus:border-transparent focus:ring-1 focus:ring-black"
        />
      </div>
    </Form>
  );
};

export default HeaderSearchBar;

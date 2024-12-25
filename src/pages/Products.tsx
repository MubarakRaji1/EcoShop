import React, { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/ui/ProductCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { FilterBar } from '@/components/ui/FilterBar';

export function Products() {
  const { products, loading } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <SearchBar onSearch={setSearchQuery} />
          <FilterBar onFilterChange={setSelectedCategory} />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
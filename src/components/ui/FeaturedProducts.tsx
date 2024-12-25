import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { useProducts } from '@/hooks/useProducts';

export function FeaturedProducts() {
  const { products, loading } = useProducts();
  const featuredProducts = products.slice(0, 4);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link 
          to="/products" 
          className="text-blue-600 hover:text-blue-700 flex items-center gap-1"
        >
          View All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FeaturedProducts } from '@/components/ui/FeaturedProducts';
import { CategoryGrid } from '@/components/ui/CategoryGrid';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to EcoShop
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover our curated collection of sustainable and eco-friendly products
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 gap-2">
                Shop Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <CategoryGrid />
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts />
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered within 24 hours</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600">Safe and secure payment methods</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round the clock customer support</p>
          </div>
        </div>
      </section>
    </div>
  );
}
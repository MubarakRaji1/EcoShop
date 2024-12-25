import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Book, Home, Shirt } from 'lucide-react';

const categories = [
  { name: 'Electronics', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Fashion', icon: Shirt, color: 'bg-pink-100 text-pink-600' },
  { name: 'Books', icon: Book, color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Home & Garden', icon: Home, color: 'bg-green-100 text-green-600' },
  { name: 'Accessories', icon: ShoppingBag, color: 'bg-purple-100 text-purple-600' },
];

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {categories.map(({ name, icon: Icon, color }) => (
        <Link
          key={name}
          to={`/products?category=${name}`}
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`p-3 rounded-full ${color} mb-3`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-medium text-gray-900">{name}</span>
        </Link>
      ))}
    </div>
  );
}
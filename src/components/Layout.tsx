import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Store } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { useAuthStore } from '@/store/auth';

export function Layout({ children }: { children: React.ReactNode }) {
  const cartItems = useCartStore((state) => state.items);
  const user = useAuthStore((state) => state.user);
  const signOut = useAuthStore((state) => state.signOut);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Store className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">EcoShop</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/products"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="relative text-gray-700 hover:text-gray-900 p-2"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              {user ? (
                <button
                  onClick={() => signOut()}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign Out
                </button>
              ) : (
                <Link to="/auth" className="text-gray-700 hover:text-gray-900 p-2">
                  <User className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
}
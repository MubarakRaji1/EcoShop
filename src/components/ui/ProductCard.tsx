import React from 'react';
import { Button } from './button';
import { useCartStore } from '@/store/cart';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    image_url: string;
    stock: number;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isWishlist, setIsWishlist] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative">
        <img
          src={product.image_url || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
        />
        <button
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:scale-110 transition-transform"
        >
          <Heart className={`h-5 w-5 ${isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 h-12 line-clamp-2">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold">${product.price}</p>
          <p className="text-sm text-gray-500">{product.stock} in stock</p>
        </div>
        <Button
          onClick={() => addItem(product)}
          className="w-full mt-4"
          disabled={product.stock <= 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}
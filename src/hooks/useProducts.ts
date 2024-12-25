import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image_url: string;
  category: string;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    stock: 15,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
  },
  {
    id: '2',
    name: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 299.99,
    stock: 10,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
  },
  {
    id: '3',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt',
    price: 24.99,
    stock: 50,
    category: 'Clothing',
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
  },
  {
    id: '4',
    name: 'Desk Lamp',
    description: 'Modern LED desk lamp with adjustable brightness',
    price: 49.99,
    stock: 20,
    category: 'Home & Garden',
    image_url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c'
  },
  {
    id: '5',
    name: 'Bestseller Novel',
    description: 'Latest bestselling fiction novel',
    price: 19.99,
    stock: 30,
    category: 'Books',
    image_url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'
  },
  // Add more sample products...
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // If no products in database, use sample products
        setProducts(data?.length ? data : SAMPLE_PRODUCTS);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to sample products on error
        setProducts(SAMPLE_PRODUCTS);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading };
}
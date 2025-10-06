import React, { useMemo } from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ searchQuery = '', categoryQuery = '' }) => {
  const allProducts = [
    {
      id: 201,
      image: '/images/img_frame_9.png',
      title: 'Hoodie Gray',
      price: '60.00',
      originalPrice: '80.00',
      rating: 4.5,
      reviewCount: 60,
      saleType: 'flash',
      category: 'clothing',
      isFavorite: false
    },
    {
      id: 202,
      image: '/images/img_frame_9_294x248.png',
      title: 'White Hoodie',
      price: '22.00',
      originalPrice: null,
      rating: 4.5,
      reviewCount: 60,
      saleType: 'flash',
      category: 'clothing',
      isFavorite: false
    },
    {
      id: 203,
      image: '/images/img_frame_9_1.png',
      title: 'Audere Hoodie',
      price: '30.00',
      originalPrice: '35.00',
      rating: 4.5,
      reviewCount: 60,
      saleType: 'flash',
      category: 'clothing',
      isFavorite: true
    },
    {
      id: 204,
      image: '/images/img_frame_9_2.png',
      title: 'Hoodie Black White',
      price: '70.00',
      originalPrice: '85.00',
      rating: 4.5,
      reviewCount: 60,
      saleType: 'discount',
      saleValue: '15',
      category: 'clothing',
      isFavorite: false
    },
    {
      id: 205,
      image: '/images/img_frame_9_3.png',
      title: 'Running Shoes Black',
      price: '80.00',
      originalPrice: '100.00',
      rating: 4.8,
      reviewCount: 120,
      saleType: 'discount',
      saleValue: '20',
      category: 'shoes',
      isFavorite: false
    },
    {
      id: 206,
      image: '/images/img_frame_9_4.png',
      title: 'Casual T-Shirt',
      price: '15.00',
      originalPrice: '20.00',
      rating: 4.0,
      reviewCount: 80,
      saleType: 'flash',
      category: 'clothing',
      isFavorite: true
    }
  ];

  const products = useMemo(() => {
    let filtered = allProducts;

    if (categoryQuery) {
      filtered = filtered.filter(product => 
        product.category?.toLowerCase() === categoryQuery.toLowerCase()
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.category?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, categoryQuery]);

  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="text-base text-gray-600 font-['Plus_Jakarta_Sans']">
          {products.length} Product{products.length === 1 ? '' : 's'} Found
          {searchQuery && <span className="ml-2">for "{searchQuery}"</span>}
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              reviewCount={product.reviewCount}
              saleType={product.saleType}
              saleValue={product.saleValue}
              isFavorite={product.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500 mb-6">
            {searchQuery ? `No products matching "${searchQuery}"` : 'No products available'}
          </p>
          <button
            onClick={() => window.location.href = '/products'}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

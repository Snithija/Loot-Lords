import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 201,
      image: '/images/img_frame_9.png',
      title: 'Hoodie Gray',
      price: '60.00',
      originalPrice: '80.00',
      rating: 4.5,
      reviewCount: 60,
      saleType: 'flash',
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
      isFavorite: false
    },
    {
      id: 205,
      image: '/images/img_frame_9_3.png',
      title: 'Hoodie Brown',
      price: '50.00',
      originalPrice: null,
      rating: 4.5,
      reviewCount: 60,
      saleType: null,
      isFavorite: false
    },
    {
      id: 206,
      image: '/images/img_frame_9_4.png',
      title: 'Green Hoodie',
      price: '30.00',
      originalPrice: '35.00',
      rating: 4.5,
      reviewCount: 60,
      saleType: 'discount',
      saleValue: '15',
      isFavorite: true
    }
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            id={product?.id}
            image={product?.image}
            title={product?.title}
            price={product?.price}
            originalPrice={product?.originalPrice}
            rating={product?.rating}
            reviewCount={product?.reviewCount}
            saleType={product?.saleType}
            saleValue={product?.saleValue}
            isFavorite={product?.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
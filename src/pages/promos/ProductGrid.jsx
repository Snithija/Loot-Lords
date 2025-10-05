import React, { useState } from 'react';
import RatingBar from '../../components/ui/RatingBar';
import { useCart } from "../../context/CartContext";

const ProductGrid = () => {
  const { addToCart } = useCart();
  const [favorites, setFavorites] = useState(new Set([303, 307])); // Products 303 and 307 are favorited

  const products = [
    {
      id: 301,
      name: "Beach Hat",
      image: "/images/img_frame_9.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 40.00,
      originalPrice: 50.00,
      discount: "10%",
      isFavorited: false
    },
    {
      id: 302,
      name: "Sneakers Brown Nike",
      image: "/images/img_frame_9_294x248.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 250.00,
      originalPrice: 300.00,
      discount: "20%",
      isFavorited: false
    },
    {
      id: 303,
      name: "Flanel Yellow Outer",
      image: "/images/img_frame_9_1.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 35.00,
      originalPrice: 40.00,
      discount: "10%",
      isFavorited: true
    },
    {
      id: 304,
      name: "Outcast Shirt",
      image: "/images/img_frame_9_2.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 60.00,
      originalPrice: 80.00,
      discount: "25%",
      isFavorited: true
    },
    {
      id: 305,
      name: "Audere Hoodie",
      image: "/images/img_frame_9_3.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 30.00,
      originalPrice: 33.00,
      discount: "10%",
      isFavorited: false
    },
    {
      id: 306,
      name: "Jeans Jacket",
      image: "/images/img_frame_9_4.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 124.00,
      originalPrice: 1360.00,
      discount: "10%",
      isFavorited: false
    },
    {
      id: 307,
      name: "Long Regular Jeans",
      image: "/images/img_frame_9_5.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 200.00,
      originalPrice: 220.00,
      discount: "10%",
      isFavorited: false
    },
    {
      id: 308,
      name: "Brown Leaf Pattern Shirt",
      image: "/images/img_frame_9_6.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 400.00,
      originalPrice: 440.00,
      discount: "15%",
      isFavorited: true
    },
    {
      id: 309,
      name: "Dark Denim Jeans",
      image: "/images/img_frame_9_7.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 30.00,
      originalPrice: 35.00,
      discount: "15%",
      isFavorited: false,
      isFlashSale: true
    },
    {
      id: 310,
      name: "North Face Polar Jacket",
      image: "/images/img_frame_9_8.png",
      rating: 4.5,
      reviews: 60,
      currentPrice: 100.00,
      originalPrice: 110.00,
      discount: "15%",
      isFavorited: false
    }
  ];

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites?.has(productId)) {
        newFavorites?.delete(productId);
      } else {
        newFavorites?.add(productId);
      }
      return newFavorites;
    });
  };

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[126px] py-8 lg:py-[30px]">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products?.map((product) => (
            <div
              key={product?.id}
              className="flex flex-col gap-[14px] justify-start items-center w-full bg-white border border-[#cbcbcb] rounded-[16px] p-[10px] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image Container */}
              <div className="relative w-full">
                <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[294px]">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover rounded-[12px]"
                    loading="lazy"
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute top-[14px] left-0 right-0 flex flex-row justify-between items-start px-[12px]">
                    {/* Discount Badge(s) */}
                    <div className="flex flex-col gap-[14px] justify-start items-start">
                      {product?.isFlashSale && (
                        <span className="bg-[#000000] text-white text-[14px] sm:text-[16px] font-medium leading-[21px] px-[10px] py-[2px] rounded-[14px]">
                          Flash Sale
                        </span>
                      )}
                      <span className="bg-[#5da96a] text-white text-[14px] sm:text-[16px] font-medium leading-[21px] px-[10px] py-[2px] rounded-[14px]">
                        {product?.discount}
                      </span>
                    </div>
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product?.id)}
                      className="bg-white rounded-[14px] p-[6px] shadow-[-2px_2px_10px_#0000003f] hover:scale-105 transition-transform duration-200"
                      aria-label={`${favorites?.has(product?.id) ? 'Remove from' : 'Add to'} favorites`}
                    >
                      <img
                        src={favorites?.has(product?.id) ? "/images/img_favorite.svg" : "/images/img_search_black_900.svg"}
                        alt={favorites?.has(product?.id) ? "Remove from favorites" : "Add to favorites"}
                        className="w-[16px] h-[16px] sm:w-[28px] sm:h-[28px]"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-[14px] justify-start items-center w-full px-[4px]">
                {/* Product Info */}
                <div className="flex flex-col gap-[2px] justify-start items-start w-full">
                  <h3 className="text-[14px] sm:text-[16px] font-medium leading-[21px] text-[#000000] line-clamp-2">
                    {product?.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex flex-row justify-start items-center w-full gap-[6px] mt-1">
                    <RatingBar
                      rating={product?.rating}
                      readOnly
                      size="small"
                      className="flex-shrink-0"
                      layout_width="auto"
                      position="relative"
                      onChange={() => {}}
                    />
                    <span className="text-[8px] font-medium leading-[11px] text-[#8e8e93]">
                      {product?.rating} ({product?.reviews} Review)
                    </span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex flex-row justify-start items-center w-full gap-[6px]">
                  <span className="text-[14px] sm:text-[16px] font-bold leading-[21px] text-[#000000]">
                    $ {product?.currentPrice?.toFixed(2)}
                  </span>
                  <span className="text-[10px] sm:text-[12px] font-medium leading-[16px] text-[#5da96a] line-through">
                    $ {product?.originalPrice?.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart({
                    id: product.id,
                    name: product.name,
                    price: `$ ${product.currentPrice.toFixed(2)}`,
                    originalPrice: `$ ${product.originalPrice.toFixed(2)}`,
                    discountedPrice: `$ ${product.currentPrice.toFixed(2)}`,
                    image: product.image,
                    rating: product.rating,
                    reviews: product.reviews
                  })}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
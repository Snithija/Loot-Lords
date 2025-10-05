import React, { useState } from 'react';
import RatingBar from '../../components/ui/RatingBar';
import { useCart } from "../../context/CartContext";

const ProductCard = ({ 
  id,
  image, 
  title, 
  price, 
  originalPrice, 
  rating = 4.5, 
  reviewCount = 60, 
  saleType,
  saleValue,
  isFavorite = false 
}) => {
  const { addToCart } = useCart();
  const [favorite, setFavorite] = useState(isFavorite);

  // Create product object for cart
  const product = {
    id: id,
    name: title,
    price: `$ ${price}`,
    originalPrice: originalPrice ? `$ ${originalPrice}` : null,
    discountedPrice: `$ ${price}`,
    image: image,
    rating: rating,
    reviews: reviewCount
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const getSaleBadgeStyle = () => {
    if (saleType === 'flash') {
      return 'bg-[#000000] text-white';
    } else if (saleType === 'discount') {
      return 'bg-[#5da96a] text-white';
    }
    return 'bg-[#000000] text-white';
  };

  const getFavoriteIcon = () => {
    if (favorite) {
      return '/images/img_favorite.svg';
    }
    return '/images/img_search_black_900.svg';
  };

  return (
    <div className="bg-white border border-[#cbcbcb] rounded-2xl p-3 lg:p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Product Image Container */}
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[200px] sm:h-[240px] lg:h-[294px] object-cover rounded-xl"
        />
        
        {/* Sale Badge and Favorite Button Overlay */}
        <div className="absolute top-3 left-0 right-0 flex justify-between items-start px-3">
          {/* Sale Badge */}
          {saleType && (
            <div className={`px-3 py-1 rounded-xl text-sm lg:text-lg font-medium ${getSaleBadgeStyle()}`}>
              {saleType === 'flash' ? 'Flash Sale' : `${saleValue}%`}
            </div>
          )}
          
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="bg-white p-2 rounded-xl shadow-[-2px_2px_10px_#0000003f] hover:bg-gray-50 transition-colors duration-200 ml-auto"
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <img 
              src={getFavoriteIcon()} 
              alt="Favorite" 
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-3 px-1">
        {/* Product Title */}
        <h3 className="text-lg font-medium text-[#000000] line-clamp-1">
          {title}
        </h3>

        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <RatingBar 
            rating={rating} 
            readOnly
            className="text-yellow-400"
            layout_width="auto"
            position="relative"
            variant="default"
            size="small"
            onChange={() => {}}
          />
          <span className="text-xs text-[#8e8e93] font-medium">
            {rating} ({reviewCount} Review)
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#000000]">
            $ {price}
          </span>
          {originalPrice && (
            <span className="text-sm font-medium text-[#5da96a] line-through">
              $ {originalPrice}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
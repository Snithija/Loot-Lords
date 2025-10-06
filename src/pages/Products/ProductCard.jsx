import React from "react";
import RatingBar from "../../components/ui/RatingBar";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

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
}) => {
  const { addToCart } = useCart();
  const { isFav, toggle } = useFavorites();

  const favorite = isFav(id);

  const productForCart = {
    id,
    name: title,
    price: `$ ${typeof price === "number" ? price.toFixed(2) : price}`,
    originalPrice: originalPrice
      ? `$ ${typeof originalPrice === "number" ? originalPrice.toFixed(2) : originalPrice}`
      : null,
    discountedPrice: `$ ${typeof price === "number" ? price.toFixed(2) : price}`,
    image,
    rating,
    reviews: reviewCount,
  };

  const handleFavoriteClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    try {
      console.log('ProductCard - Toggling favorite for product:', id, title);
      toggle(id, {
        id,
        name: title,
        image,
        rating,
        reviews: reviewCount,
        // store numeric prices for Favorites page math
        price:
          typeof price === "number"
            ? price
            : parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0,
        originalPrice:
          typeof originalPrice === "number"
            ? originalPrice
            : originalPrice
              ? parseFloat(String(originalPrice).replace(/[^0-9.]/g, "")) || 0
              : 0,
        discount: saleValue ? Number(saleValue) : undefined,
        isFlashSale: saleType === "flash",
      });
      console.log('ProductCard - Favorite toggled successfully');
    } catch (error) {
      console.error('ProductCard - Error toggling favorite:', error);
    }
  };

  const getSaleBadgeStyle = () => {
    if (saleType === "flash") return "bg-[#000000] text-white";
    if (saleType === "discount") return "bg-[#5da96a] text-white";
    return "bg-[#000000] text-white";
  };

  return (
    <div className="bg-white border border-[#cbcbcb] rounded-2xl p-3 lg:p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[240px] lg:h-[294px] object-cover rounded-xl"
        />
        <div className="absolute top-3 left-0 right-0 flex justify-between items-start px-3">
          {saleType && (
            <div
              className={`px-3 py-1 rounded-xl text-sm lg:text-lg font-medium ${getSaleBadgeStyle()}`}
            >
              {saleType === "flash" ? "Flash Sale" : `${saleValue}%`}
            </div>
          )}
          <button
            onClick={handleFavoriteClick}
            className="bg-white p-2 rounded-xl shadow-[-2px_2px_10px_#0000003f] hover:bg-gray-50 transition-colors duration-200 ml-auto cursor-pointer"
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
            type="button"
          >
            {favorite ? (
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="#ff4d4f"
                className="transform transition-all duration-200 hover:scale-110 active:scale-95"
              >
                <path d="M12 21s-7.19-4.35-9.33-8.13C.8 9.7 2.2 6 5.65 6c1.93 0 3.23 1.12 4.02 2.33C10.77 7.12 12.07 6 14 6c3.45 0 4.85 3.7 2.98 6.87C19.19 16.65 12 21 12 21z" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#111"
                strokeWidth="1.6"
                className="transform transition-all duration-200 hover:scale-110 hover:stroke-red-400 active:scale-95"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="space-y-3 px-1">
        <h3 className="text-lg font-medium text-[#000000] line-clamp-1">
          {title}
        </h3>

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

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#000000]">
            $ {typeof price === "number" ? price.toFixed(2) : price}
          </span>
          {originalPrice ? (
            <span className="text-sm font-medium text-[#5da96a] line-through">
              ${" "}
              {typeof originalPrice === "number"
                ? originalPrice.toFixed(2)
                : originalPrice}
            </span>
          ) : null}
        </div>

        <button
          onClick={() => addToCart(productForCart)}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

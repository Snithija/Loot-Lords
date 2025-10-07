import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import RatingBar from "../../components/ui/RatingBar";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

const ProductGrid = () => {
  const { addToCart } = useCart();
  const { isFav, toggle } = useFavorites();
  const navigate = useNavigate();

  const products = useMemo(
    () => [
      {
        id: 301,
        name: "Beach Hat",
        image: "/images/img_frame_9.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 40.0,
        originalPrice: 50.0,
        discount: "10%",
      },
      {
        id: 302,
        name: "Sneakers Brown Nike",
        image: "/images/img_frame_9_294x248.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 250.0,
        originalPrice: 300.0,
        discount: "20%",
      },
      {
        id: 303,
        name: "Flanel Yellow Outer",
        image: "/images/img_frame_9_1.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 35.0,
        originalPrice: 40.0,
        discount: "10%",
      },
      {
        id: 304,
        name: "Outcast Shirt",
        image: "/images/img_frame_9_2.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 60.0,
        originalPrice: 80.0,
        discount: "25%",
      },
      {
        id: 305,
        name: "Audere Hoodie",
        image: "/images/img_frame_9_3.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 30.0,
        originalPrice: 33.0,
        discount: "10%",
      },
      {
        id: 306,
        name: "Jeans Jacket",
        image: "/images/img_frame_9_4.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 124.0,
        originalPrice: 1360.0,
        discount: "10%",
      },
      {
        id: 307,
        name: "Long Regular Jeans",
        image: "/images/img_frame_9_5.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 200.0,
        originalPrice: 220.0,
        discount: "10%",
      },
      {
        id: 308,
        name: "Brown Leaf Pattern Shirt",
        image: "/images/img_frame_9_6.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 400.0,
        originalPrice: 440.0,
        discount: "15%",
      },
      {
        id: 309,
        name: "Dark Denim Jeans",
        image: "/images/img_frame_9_7.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 30.0,
        originalPrice: 35.0,
        discount: "15%",
        isFlashSale: true,
      },
      {
        id: 310,
        name: "North Face Polar Jacket",
        image: "/images/img_frame_9_8.png",
        rating: 4.5,
        reviews: 60,
        currentPrice: 100.0,
        originalPrice: 110.0,
        discount: "15%",
      },
    ],
    []
  );

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[126px] py-8 lg:py-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => {
            const fav = isFav(product.id);
            return (
              <div
                key={product.id}
                className="flex flex-col gap-[14px] bg-white border border-[#cbcbcb] rounded-[16px] p-[10px] hover:shadow-lg cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[294px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-[12px]"
                    loading="lazy"
                  />
                  <div className="absolute top-[14px] left-0 right-0 flex justify-between items-start px-[12px]">
                    <div className="flex flex-col gap-[14px]">
                      {product.isFlashSale && (
                        <span className="bg-[#000] text-white text-sm sm:text-base font-medium px-[10px] py-[2px] rounded-[14px]">
                          Flash Sale
                        </span>
                      )}
                      <span className="bg-[#5da96a] text-white text-sm sm:text-base font-medium px-[10px] py-[2px] rounded-[14px]">
                        {product.discount}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggle(product.id, {
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          rating: product.rating,
                          reviews: product.reviews,
                          currentPrice: product.currentPrice,
                          originalPrice: product.originalPrice,
                          discount: product.discount,
                          isFlashSale: !!product.isFlashSale,
                        });
                      }}
                      className="bg-white rounded-[14px] p-[6px] shadow-[-2px_2px_10px_#0000003f] hover:scale-105 transition-transform"
                      aria-label={`${fav ? "Remove from" : "Add to"} favorites`}
                      title={fav ? "Remove from favorites" : "Add to favorites"}
                    >
                      {fav ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#ff4d4f"
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
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-[14px] w-full px-[4px]">
                  <div className="flex flex-col gap-[2px]">
                    <h3 className="text-sm sm:text-base font-medium text-[#000] line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-[6px] mt-1">
                      <RatingBar
                        rating={product.rating}
                        readOnly
                        size="small"
                        className="flex-shrink-0"
                        layout_width="auto"
                        position="relative"
                        onChange={() => {}}
                      />
                      <span className="text-[8px] font-medium text-[#8e8e93]">
                        {product.rating} ({product.reviews} Review)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-[6px]">
                    <span className="text-sm sm:text-base font-bold text-[#000]">
                      $ {product.currentPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] sm:text-[12px] font-medium text-[#5da96a] line-through">
                      $ {product.originalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: `$ ${product.currentPrice.toFixed(2)}`,
                        originalPrice: `$ ${product.originalPrice.toFixed(2)}`,
                        discountedPrice: `$ ${product.currentPrice.toFixed(2)}`,
                        image: product.image,
                        rating: product.rating,
                        reviews: product.reviews,
                      });
                    }}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-colors mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

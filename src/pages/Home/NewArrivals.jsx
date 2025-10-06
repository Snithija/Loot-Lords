import React from "react";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext";

const NewArrivals = () => {
  const { addToCart } = useCart();
  const { isFav, toggle } = useFavorites();

  const products = [
    {
      id: 1,
      name: "Hoodie Gray",
      price: "$ 60.00",
      originalPrice: "$ 80.00",
      image: "/images/img_frame_9.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: "705 Black Shirt",
      price: "$ 25.00",
      image: "/images/img_frame_9_294x248.png",
      hasFlashSale: false,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Slim Navy Shirt",
      price: "$ 40.99",
      originalPrice: "$ 59.99",
      image: "/images/img_frame_9_1.png",
      hasFlashSale: true,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Leather Bomber Jacket",
      price: "$ 125.00",
      image: "/images/img_frame_9_2.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: true,
    },
    {
      id: 5,
      name: "Beach Hat",
      price: "$ 40.00",
      originalPrice: "$ 50.00",
      image: "/images/img_frame_9_3.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: true,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Sneakers Brown Nike",
      price: "$ 250.00",
      image: "/images/img_frame_9_4.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Flanel Yellow Outer",
      price: "$ 30.00",
      originalPrice: "$ 39.00",
      image: "/images/img_frame_9_5.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Outcast Shirt",
      price: "$ 25.00",
      image: "/images/img_frame_9_6.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: true,
    },
    {
      id: 9,
      name: "Audere Hoodie",
      price: "$ 30.00",
      originalPrice: "$ 35.00",
      image: "/images/img_frame_9_7.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: true,
      isFavorite: false,
    },
    {
      id: 10,
      name: "Jeans Jacket",
      price: "$ 124.00",
      image: "/images/img_frame_9_8.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: false,
    },
    {
      id: 11,
      name: "Long Regular Jeans",
      price: "$ 200.00",
      originalPrice: "$ 220.00",
      image: "/images/img_frame_9_9.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: false,
    },
    {
      id: 12,
      name: "Brown Leaf Pattern Shirt",
      price: "$ 400.00",
      image: "/images/img_frame_9_10.png",
      rating: 4.5,
      reviews: 60,
      hasFlashSale: false,
      isFavorite: true,
    },
  ];

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <img
        key={i}
        src={
          i < Math.floor(rating)
            ? "/images/img_frame_26086777.svg"
            : "/images/img_frame_26086777_blue_gray_100.svg"
        }
        alt="Star"
        className="w-[10px] h-[10px]"
      />
    ));

  // helper to parse "$ 40.00" -> 40
  const parseMoney = (val) =>
    typeof val === "number"
      ? val
      : parseFloat(String(val || "0").replace(/[^0-9.]/g, "")) || 0;

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[124px]">
        <div className="flex flex-col gap-[60px]">
          {/* Section Header */}
          <div className="flex flex-col gap-[26px]">
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[30px] sm:leading-[38px] md:leading-[46px] text-[#000000] font-['Plus_Jakarta_Sans']">
              New Arrival
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => {
                const fav = isFav(product.id);
                const priceNow = parseMoney(product.price);
                const priceOld = parseMoney(product.originalPrice);

                const cartItem = {
                  id: product.id,
                  name: product.name,
                  price: `$ ${priceNow.toFixed(2)}`,
                  originalPrice: priceOld ? `$ ${priceOld.toFixed(2)}` : null,
                  discountedPrice: `$ ${priceNow.toFixed(2)}`,
                  image: product.image,
                  rating: product.rating || 4.5,
                  reviews: product.reviews || 0,
                };

                return (
                  <div
                    key={product.id}
                    className="bg-white border border-[#cbcbcb] rounded-[16px] p-[10px] hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Product Image Container */}
                    <div className="relative w-full h-[200px] sm:h-[240px] md:h-[294px] mb-[14px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-[12px]"
                      />

                      {/* Flash Sale Badge */}
                      {product.hasFlashSale && (
                        <div className="absolute top-[14px] left-[12px]">
                          <span className="bg-[#000000] text-white text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] font-['Plus_Jakarta_Sans'] px-[10px] py-[2px] rounded-[14px]">
                            Flash Sale
                          </span>
                        </div>
                      )}

                      {/* Favorite Button */}
                      <button
                        onClick={() =>
                          toggle(product.id, {
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            rating: product.rating || 4.5,
                            reviews: product.reviews || 0,
                            // store numeric prices so /favorites can render cleanly
                            price: priceNow,
                            originalPrice: priceOld,
                            isFlashSale: !!product.hasFlashSale,
                          })
                        }
                        className="absolute top-[14px] right-[12px] bg-white rounded-[14px] p-[6px] shadow-[-2px_2px_10px_#0000003f] hover:bg-gray-50 transition-colors duration-200"
                        aria-label={
                          fav ? "Remove from favorites" : "Add to favorites"
                        }
                        title={
                          fav ? "Remove from favorites" : "Add to favorites"
                        }
                      >
                        {fav ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#ff4d4f"
                            xmlns="http://www.w3.org/2000/svg"
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
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col gap-[14px] px-[4px] mb-[10px]">
                      {/* Product Name and Rating */}
                      <div className="flex flex-col gap-[2px] sm:gap-[14px]">
                        <h3 className="text-[14px] sm:text-[16px] font-medium leading-[18px] sm:leading-[21px] text-[#000000] font-['Plus_Jakarta_Sans']">
                          {product.name}
                        </h3>

                        {product.rating && (
                          <div className="flex items-center gap-[4px]">
                            <div className="flex gap-[4px]">
                              {renderStars(product.rating)}
                            </div>
                            <span className="text-[8px] font-medium leading-[11px] text-[#8e8e93] font-['Plus_Jakarta_Sans'] ml-[2px]">
                              {product.rating} ({product.reviews} Review)
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[14px] sm:text-[16px] font-bold leading-[18px] sm:leading-[21px] text-[#000000] font-['Plus_Jakarta_Sans']">
                          $ {priceNow.toFixed(2)}
                        </span>
                        {priceOld > 0 && (
                          <span className="text-[10px] sm:text-[12px] font-medium leading-[13px] sm:leading-[16px] text-[#5da96a] font-['Plus_Jakarta_Sans'] line-through self-end">
                            $ {priceOld.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => addToCart(cartItem)}
                        className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-['Plus_Jakarta_Sans'] font-semibold transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sale Banner */}
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[360px] rounded-[16px] overflow-hidden mx-[6px]">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/img_6.png)" }}
            />
            <div className="absolute bottom-[26px] left-1/2 transform -translate-x-1/2 flex gap-[6px] mx-[52px]">
              <div className="w-5 h-[10px] bg-[#ededed] rounded-[5px]" />
              <div className="w-[10px] h-[10px] bg-[#9e9e9e] rounded-[5px]" />
              <div className="w-[10px] h-[10px] bg-[#9e9e9e] rounded-[5px]" />
              <div className="w-[10px] h-[10px] bg-[#9e9e9e] rounded-[5px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

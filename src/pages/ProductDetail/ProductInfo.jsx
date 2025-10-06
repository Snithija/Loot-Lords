import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import RatingBar from "../../components/ui/RatingBar";
import ColorOptions from "./ColorOptions";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState("White");
  const [quantity, setQuantity] = useState(1);

  // Product database
  const productDatabase = {
    1: {
      id: 1,
      name: "Hoodie Gray",
      price: "$60.00",
      originalPrice: "$80.00",
      discountedPrice: "$60.00",
      image: "/images/img_frame_9.png",
      rating: 4.5,
    },
    2: {
      id: 2,
      name: "705 Black Shirt",
      price: "$25.00",
      originalPrice: "$35.00",
      discountedPrice: "$25.00",
      image: "/images/img_frame_9_294x248.png",
      rating: 4.0,
    },
    3: {
      id: 3,
      name: "Slim Navy Shirt",
      price: "$40.99",
      originalPrice: "$59.99",
      discountedPrice: "$40.99",
      image: "/images/img_frame_9_1.png",
      rating: 4.5,
    },
    101: {
      id: 101,
      name: "Vans Magenta",
      price: "$75.00",
      originalPrice: "$80.00",
      discountedPrice: "$75.00",
      image: "/images/img_frame_9_11.png",
      rating: 4.5,
    },
    102: {
      id: 102,
      name: "Tosca Plain Shirt",
      price: "$25.00",
      originalPrice: "$30.00",
      discountedPrice: "$25.00",
      image: "/images/img_frame_9_12.png",
      rating: 4.5,
    },
  };

  // Get current product or fallback to default
  const product = productDatabase[id] || {
    id: "nike-athletic-112",
    name: "Nike Athletic 112",
    price: "$80.00",
    originalPrice: "$60.00",
    discountedPrice: "$80.00",
    image: "/images/img_frame_9_1.png",
    rating: 4.5,
  };

  const handleAddToCart = () => {
    // Add product to cart with selected options
    const productToAdd = {
      ...product,
      quantity: quantity,
      selectedColor: selectedColor,
    };

    addToCart(productToAdd);

    // Navigate to cart page
    navigate("/cart");
  };

  return (
    <div className="flex-1 space-y-4 md:space-y-5">
      {/* Product Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
        {product.name}
      </h1>

      {/* Price Section */}
      <div className="flex items-center gap-2 md:gap-3">
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-black">
          {product.price}
        </span>
        {product.originalPrice && (
          <span className="text-sm md:text-base font-bold text-green-600 line-through">
            {product.originalPrice}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center">
        <RatingBar
          rating={product.rating || 4.5}
          readOnly={true}
          size="small"
          layout_width="auto"
          position="left"
          onChange={() => {}}
          className=""
        />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Color Options */}
      <ColorOptions onColorChange={setSelectedColor} />

      {/* Quantity Selector */}
      <QuantitySelector onQuantityChange={setQuantity} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2 bg-black bg-opacity-75 hover:bg-opacity-90 text-white px-6 py-2 rounded-2xl transition-colors"
        >
          <img src="/images/img_bag.svg" alt="" className="w-4 h-4" />
          <span className="text-sm font-normal">Add to Cart</span>
        </button>

        <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-black border border-gray-400 px-6 py-2 rounded-2xl transition-colors">
          <img src="/images/img_favorite_icon.svg" alt="" className="w-5 h-5" />
          <span className="text-sm font-normal">Add to Wishlist</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;

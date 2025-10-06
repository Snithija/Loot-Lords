import React from "react";
import { useCart } from "../../context/CartContext";

const AddToCartButton = ({ product, className = "", children }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    // Ensure the product has the required fields
    const cartProduct = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      discountedPrice: product.discountedPrice || product.price,
      image: product.image || product.img,
      color: product.color,
      size: product.size,
    };

    addToCart(cartProduct);
  };

  const defaultClassName =
    "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium";
  const buttonClassName = className || defaultClassName;

  return (
    <button
      onClick={handleAddToCart}
      className={buttonClassName}
      aria-label={`Add ${product.name || product.title} to cart`}
    >
      {children || "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;

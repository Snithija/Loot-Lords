import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClose = () => {
    onClose();
  };

  const handleContinueShopping = () => {
    onClose();
    navigate("/");
  };

  const handleViewCart = () => {
    onClose();
    navigate("/cart");
  };

  const totalPrice = getTotalPrice();

  if (!isOpen) return null;

  if (cart.length === 0) {
    return (
      <div
        className="cart-panel bg-white shadow-2xl flex flex-col animate-slide-in-right border-l border-gray-200 z-50"
        onClick={(e) => e.stopPropagation()}
      >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
            <h3 className="text-lg font-semibold text-gray-900">
              Shopping Cart
            </h3>
            <button
              onClick={handleClose}
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
              aria-label="Close cart"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Empty State */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 bg-gray-50">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Your cart is empty
            </h4>
            <p className="text-gray-500 text-center mb-8">
              When you add products, they'll appear here
            </p>
            <button
              onClick={handleContinueShopping}
              className="px-8 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors shadow-lg"
            >
              Start Shopping
            </button>
          </div>
        </div>
    );
  }

  return (
    <div
      className="cart-panel bg-white shadow-2xl flex flex-col animate-slide-in-right border-l border-gray-200 z-50"
      onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <h3 className="text-lg font-semibold text-gray-900">Shopping Cart</h3>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
            aria-label="Close cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 border-b border-gray-200 last:border-b-0 bg-white mx-3 my-2 rounded-lg shadow-sm"
            >
              <div className="flex gap-3">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors shadow-md"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ×
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                    {item.name}
                  </h4>

                  {(item.color || item.size) && (
                    <div className="flex items-center gap-1 mb-2">
                      {item.color && (
                        <span className="text-xs text-gray-600 capitalize px-2 py-1 bg-gray-100 rounded">
                          {item.color}
                        </span>
                      )}
                      {item.size && (
                        <span className="text-xs text-gray-600 uppercase px-2 py-1 bg-gray-100 rounded">
                          {item.size}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {item.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                        <span className="font-bold text-green-600 text-sm">
                          {item.discountedPrice || item.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium">−</span>
                      </button>
                      <span className="text-sm font-semibold text-gray-900 min-w-[20px] text-center bg-gray-100 px-2 py-1 rounded">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold text-gray-900">
              Subtotal
            </span>
            <span className="text-xl font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => {
              handleClose();
              navigate("/checkout");
            }}
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors mb-2 shadow-lg"
          >
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 text-center">
            Shipping Tax & Discount Calculate at Checkout
          </p>
        </div>
      </div>
  );
};

export default CartDropdown;

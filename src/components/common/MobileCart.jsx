import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const MobileCart = ({ isOpen = true, onClose, showAsModal = false }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const handleProceedToCheckout = () => {
    if (onClose) onClose();
    // Navigate to checkout page (you can implement this later)
    navigate("/checkout");
  };

  const totalPrice = getTotalPrice();

  if (!isOpen) return null;

  const cartContent = (
    <div
      className={`bg-white ${showAsModal ? "w-full max-w-sm mx-auto rounded-t-2xl max-h-[80vh]" : "min-h-screen"} flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Shopping Cart</h1>
        <div className="ml-auto">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.18 4.456a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.18-4.456A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {cart.length === 0 ? (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center py-12 px-4">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
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
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 text-center mb-8">
            When you add products, they'll appear here
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-4 py-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-3 py-4 border-b border-gray-100 last:border-b-0"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg bg-gray-100"
                  />
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    ×
                  </button>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 text-sm leading-5">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    {item.color && (
                      <span className="text-xs text-gray-600 capitalize">
                        {item.color}
                      </span>
                    )}
                    {item.color && item.size && (
                      <span className="text-xs text-gray-400">|</span>
                    )}
                    {item.size && (
                      <span className="text-xs text-gray-600 uppercase">
                        {item.size}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {item.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                        <span className="font-semibold text-sm">
                          {item.discountedPrice || item.price}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium">−</span>
                      </button>
                      <span className="text-sm font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <span className="text-sm font-medium">+</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer with Subtotal and Checkout */}
          <div className="border-t border-gray-200 bg-white p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900">
                Subtotal
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors text-base"
            >
              Proceed to Checkout
            </button>

            <p className="text-xs text-gray-500 text-center">
              Shipping Tax & Discount Calculate at Checkout
            </p>
          </div>
        </>
      )}
    </div>
  );

  if (showAsModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end">
        {cartContent}
      </div>
    );
  }

  return cartContent;
};

export default MobileCart;

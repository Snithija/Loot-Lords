import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import CartDropdown from "./CartDropdown";

const CartButton = () => {
  const { cart, getTotalItems } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const totalItems = getTotalItems();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close cart when clicking outside
  useEffect(() => {
    if (isDropdownOpen) {
      const handleClickOutside = (event) => {
        // Check if the click is outside the cart panel and cart button
        const cartPanel = document.querySelector('.cart-panel');
        const cartButton = event.target.closest('[aria-label="Shopping cart"]');
        
        if (cartPanel && !cartPanel.contains(event.target) && !cartButton) {
          closeDropdown();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  return (
    <>
      {/* Backdrop for mobile/tablet - invisible but clickable */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-30 bg-transparent"
          onClick={closeDropdown}
          aria-hidden="true"
        />
      )}
      
      <button
        onClick={toggleDropdown}
        className="relative bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors z-50"
        aria-label="Shopping cart"
      >
        <img
          src="/images/img_cart_icon.svg"
          alt="Shopping Cart"
          className="w-6 h-6"
        />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans']">
            {totalItems}
          </span>
        )}
      </button>

      <CartDropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </>
  );
};

export default CartButton;

import React, { useState } from "react";

const QuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(newQuantity);
      }
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-base font-bold text-black">Quantity:</span>

      <div className="flex items-center bg-gray-200 rounded-xl p-1">
        <button
          onClick={handleDecrease}
          className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 transition-colors"
          aria-label="Decrease quantity"
        >
          <img
            src="/images/img_add_round_light.svg"
            alt=""
            className="w-3 h-3"
          />
        </button>

        <span className="mx-3 text-sm font-medium text-black min-w-[20px] text-center">
          {quantity}
        </span>

        <button
          onClick={handleIncrease}
          className="w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-300 transition-colors"
          aria-label="Increase quantity"
        >
          <img
            src="/images/img_add_round_light_gray_900.svg"
            alt=""
            className="w-3 h-3"
          />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;

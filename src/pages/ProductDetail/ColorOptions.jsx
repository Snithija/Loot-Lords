import React, { useState } from "react";

const ColorOptions = ({ onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState("White");

  const colors = [
    { name: "White", value: "White" },
    { name: "Orange", value: "Orange" },
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (onColorChange) {
      onColorChange(color);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="text-base font-bold text-black">Color:</span>
        <div className="flex gap-2">
          {colors?.map((color) => (
            <button
              key={color?.value}
              onClick={() => handleColorChange(color?.value)}
              className={`px-3 py-1 text-sm font-medium rounded-xl transition-colors ${
                selectedColor === color?.value
                  ? "bg-gray-200 text-black"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }`}
            >
              {color?.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorOptions;

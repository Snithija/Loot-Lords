import React from "react";
import { AddToCartButton, CartButton } from "../../components";

// Test component to verify cart functionality
const CartTest = () => {
  const testProduct = {
    id: "test-1",
    name: "Test Product",
    price: "$29.99",
    image: "/images/img_1.png", // Use an existing image
    color: "Blue",
    size: "M",
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Cart Test</h2>

      <div className="flex gap-4 items-center">
        <AddToCartButton product={testProduct}>
          Add Test Product to Cart
        </AddToCartButton>

        <CartButton />
      </div>

      <p className="text-gray-600">
        Click "Add Test Product to Cart" then click the cart icon to see the
        right-side panel.
      </p>
    </div>
  );
};

export default CartTest;

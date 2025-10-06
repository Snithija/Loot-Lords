import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");
  const [shippingMethod, setShippingMethod] = useState("regular");

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity));
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.1;
  const shippingCharge = 2.00;
  const finalTotal = totalPrice + tax + shippingCharge;

  return (
    <>
      <Helmet>
        <title>Shopping Cart - StoreOne</title>
        <meta
          name="description"
          content="View and manage your shopping cart at StoreOne."
        />
      </Helmet>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-1">
          <div className="min-h-screen bg-white p-6 max-w-7xl mx-auto">
        <h1 className="text-lg font-semibold mb-6">Order Details</h1>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-6 mb-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
              ✓
            </div>
            <span className="mt-1 text-xs text-gray-600">Cart</span>
          </div>
          {/* Line */}
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-300 text-xs font-semibold">
              2
            </div>
            <span className="mt-1 text-xs text-gray-400">Checkout</span>
          </div>
          {/* Line */}
          <div className="flex-1 h-[2px] bg-gray-300"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-300 text-xs font-semibold">
              3
            </div>
            <span className="mt-1 text-xs text-gray-400">Pay</span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side */}
          <div className="flex-1">
            {/* Delivery / Pickup toggle */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => setDeliveryMethod("delivery")}
                className={`px-4 py-2 rounded-full font-semibold text-sm border ${
                  deliveryMethod === "delivery"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Delivery
              </button>
              <button
                onClick={() => setDeliveryMethod("pickup")}
                className={`px-4 py-2 rounded-full font-semibold text-sm border ${
                  deliveryMethod === "pickup"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                Pick Up
              </button>
            </div>

            {/* Shipping Address Section */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Shipping Address</h2>
                <div className="flex gap-2">
                  <button className="text-green-600 text-sm font-semibold border border-green-600 rounded px-3 py-1 hover:bg-green-50">
                    Edit
                  </button>
                  <button className="text-red-600 text-sm font-semibold border border-red-600 rounded px-3 py-1 hover:bg-red-50">
                    Add New
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                {/* Address Card 1 - Selected */}
                <div className="border border-green-600 rounded-md p-4 cursor-pointer w-1/2 bg-green-50">
                  <div>
                    <p className="font-semibold text-green-700">Benjamin Harrison Whitmore</p>
                    <p className="text-sm">+1(555)246-8097</p>
                    <p className="text-xs">benjamin.whitmore@example.com</p>
                    <p className="text-xs">4567 Oakwood Heights Avenue, Building 12, Apartment 34B, Riverview District, New York, NY 10001, USA</p>
                  </div>
                </div>
                {/* Address Card 2 */}
                <div className="border border-gray-300 rounded-md p-4 cursor-pointer w-1/2 bg-white">
                  <div>
                    <p className="font-semibold">Benjamin Harrison Whitmore</p>
                    <p className="text-sm">+1(555)246-8097</p>
                    <p className="text-xs">benjamin.whitmore@example.com</p>
                    <p className="text-xs">4567 Oakwood Heights Avenue, Building 12, Apartment 34B, Riverview District, New York, NY 10001, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="mb-6">
              <h2 className="font-semibold mb-3">Shipping Method</h2>
              <div className="flex flex-col gap-3">
                <label className="flex items-center justify-between border border-gray-300 rounded-md p-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="free"
                      checked={shippingMethod === "free"}
                      onChange={() => setShippingMethod("free")}
                    />
                    <div>
                      <span className="font-semibold">Free</span>
                      <p className="text-xs text-gray-600">7-14 business days</p>
                    </div>
                  </div>
                  <div className="font-semibold">$0</div>
                </label>
                <label className="flex items-center justify-between border border-green-600 rounded-md p-3 cursor-pointer bg-green-50">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="regular"
                      checked={shippingMethod === "regular"}
                      onChange={() => setShippingMethod("regular")}
                    />
                    <div>
                      <span className="font-semibold text-green-700">Regular shipping</span>
                      <p className="text-xs text-green-600">4-7 business days</p>
                    </div>
                  </div>
                  <div className="font-semibold text-green-700">$2</div>
                </label>
                <label className="flex items-center justify-between border border-gray-300 rounded-md p-3 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={shippingMethod === "express"}
                      onChange={() => setShippingMethod("express")}
                    />
                    <div>
                      <span className="font-semibold">Express shipping</span>
                      <p className="text-xs text-gray-600">1-3 business days</p>
                    </div>
                  </div>
                  <div className="font-semibold">$5</div>
                </label>
              </div>
            </div>
          </div>

          {/* Right side - Promo and Order Summary */}
          <div className="w-full lg:w-80 flex flex-col gap-4">
            {/* Promo Code Section */}
            <button className="relative flex items-center border border-blue-500 rounded-lg p-3 w-full text-blue-500 text-sm font-semibold hover:bg-blue-50 transition">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-blue-600 font-semibold">Apply Promo, Coupon, or Voucher</span>
                  <p className="text-xs text-gray-500 mt-1">Get Discount with your order</p>
                </div>
              </div>
              <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Order Summary */}
            <div className="border border-gray-300 rounded-lg p-4 text-sm">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax(10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Shipping Charge</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-3">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
              <button 
                onClick={() => navigate("/checkout")}
                className="w-full mt-4 bg-green-600 text-white py-3 rounded font-semibold hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Shipping fee & Discount Calculator at Checkout
              </p>
            </div>
          </div>
        </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Cart;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { useCart } from "../../context/CartContext";

const Pay = () => {
  const navigate = useNavigate();
  const { clearCart, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("digitalWallet");
  const [loading, setLoading] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null); // null, "success", "failure"
  
  const subtotal = getTotalPrice();
  const tax = subtotal * 0.1;
  const shippingCharge = 2.00;
  const discount = 10.00;
  const total = subtotal + tax + shippingCharge - discount;

  const paymentMethods = [
    {
      id: "debitCard",
      label: "Debit Card",
      description: "",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: "digitalWallet",
      label: "Digital Wallet",
      description: "",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: "cashOnDelivery",
      label: "Cash On Delivery",
      description: "",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
    },
    {
      id: "bankTransfer",
      label: "Direct Bank Transfer",
      description: "Example of Bank",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate payment success or failure randomly for demo
      const isSuccess = Math.random() > 0.3;
      if (isSuccess) {
        setPaymentResult("success");
        clearCart();
      } else {
        setPaymentResult("failure");
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Payment - StoreOne</title>
        <meta name="description" content="Complete your payment" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-1 relative">
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
              <div className="flex-1 h-[2px] bg-green-600"></div>
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <span className="mt-1 text-xs text-gray-600">Checkout</span>
              </div>
              {/* Line */}
              <div className="flex-1 h-[2px] bg-green-600"></div>
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-green-600 flex items-center justify-center text-white text-xs font-semibold">
                  ✓
                </div>
                <span className="mt-1 text-xs font-semibold text-green-600">Pay</span>
              </div>
            </div>

            {/* Main content */}
            <div className="flex gap-6">
              {/* Left side - Payment Methods */}
              <div className="flex-1 border border-gray-300 rounded-lg p-4">
                <h2 className="font-semibold mb-3">Shipping Method</h2>
                <div className="flex flex-col gap-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between border rounded-md p-3 cursor-pointer ${
                        paymentMethod === method.id
                          ? "border-green-600 bg-green-50"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{method.icon}</span>
                        <div>
                          <span className="font-semibold">{method.label}</span>
                          {method.description && (
                            <p className="text-xs text-gray-600">
                              {method.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={() => setPaymentMethod(method.id)}
                        className="ml-3"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Right side - Discount Coupon and Order Summary */}
              <div className="w-80 flex flex-col gap-4">
                {/* Discount Coupon */}
                <div className="border border-green-300 rounded-lg p-3 text-green-600 font-semibold cursor-pointer flex items-center justify-between">
                  <span>YEAREND24</span>
                  <span>- $10.00</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Order Summary */}
                <div className="border border-gray-300 rounded-lg p-4 text-sm">
                  <h3 className="font-semibold mb-3">Order Summary</h3>
                  <div className="flex justify-between mb-1">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Shipping Charge</span>
                    <span>${shippingCharge.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons below the main content */}
            <div className="flex justify-between max-w-4xl mt-6">
              <button
                onClick={() => {
                  setPaymentResult(null);
                  navigate("/checkout");
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
                disabled={loading || paymentResult !== null}
              >
                Back To Checkout
              </button>
              <button
                type="button"
                onClick={handlePayment}
                className={`px-6 py-2 bg-pink-200 text-pink-600 rounded font-semibold hover:bg-pink-300 transition ${
                  loading || paymentResult !== null
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={loading || paymentResult !== null}
              >
                Pay
              </button>
            </div>

            {/* Loading overlay */}
            {loading && (
              <div className="absolute inset-0 bg-gray-100 bg-opacity-70 flex items-center justify-center rounded-lg">
                <div className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-75"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-150"></span>
                    <span className="w-3 h-3 bg-gray-600 rounded-full animate-bounce delay-300"></span>
                  </div>
                  <span className="text-gray-700 font-semibold text-lg">
                    Processing your payment
                  </span>
                </div>
              </div>
            )}
          </div>
        </main>
        
        <Footer />
      </div>

      {/* Payment Result Modal */}
      {paymentResult === "success" && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setPaymentResult(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              &#x2715;
            </button>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg font-semibold">Successful Payment</h2>
              <div className="w-full text-sm text-gray-700">
                <p>
                  <strong>Payment type:</strong> {paymentMethods.find(m => m.id === paymentMethod)?.label || "Google Pay"}
                </p>
                <p>
                  <strong>Phone number:</strong> +61 444 123 456
                </p>
                <p>
                  <strong>Email:</strong> roberts.adms@gmail.com
                </p>
                <p>
                  <strong>Transaction id:</strong> 2345678910
                </p>
                <p>
                  <strong>Amount Paid:</strong> ${total.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => navigate("/order-success")}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition"
              >
                Order Status
              </button>
            </div>
          </div>
        </div>
      )}

      {paymentResult === "failure" && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            <button
              onClick={() => setPaymentResult(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              &#x2715;
            </button>
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-red-600">
                Payment Failed
              </h2>
              <p className="text-center text-gray-700">
                Unfortunately we have an issue with your payment, try again later.
              </p>
              <button
                onClick={() => setPaymentResult(null)}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700 transition"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Pay;
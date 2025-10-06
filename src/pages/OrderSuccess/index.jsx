import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Order Successful - StoreOne</title>
        <meta name="description" content="Your order has been placed successfully" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto text-center p-6">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Successful!</h1>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order has been placed successfully and you will receive a confirmation email shortly.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">Order Number</p>
                <p className="font-semibold text-lg">#SO{Date.now().toString().slice(-6)}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => navigate("/")}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => navigate("/orders")}
                className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                View Order Details
              </button>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default OrderSuccess;
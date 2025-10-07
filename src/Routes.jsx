import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Loading spinner component
const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      <p className="mt-4 text-gray-600 font-medium">{message}</p>
    </div>
  </div>
);

// Import page components
import HomePage from "./pages/Home";
import SignupPhone from "./pages/signupphone/index";
import SignupEmail from "./pages/signup/index";
import SignIn from "./pages/SignIn/index";
import ProductsPage from "./pages/Products/index";
import PromoProductsPage from "./pages/promos/index";
import FAQ from "./pages/FooterPages/FAQ";
import AboutUs from "./pages/FooterPages/AboutUs";
import Cart from "./pages/Cart/index";
import CartTest from "./pages/CartTest/index";
import Checkout from "./pages/Checkout/index";
import Pay from "./pages/Pay/index";
import OrderSuccess from "./pages/OrderSuccess/index";
import OrderHistory from "./pages/UserAccount/OrderHistory";
import OrderDetails from "./pages/UserAccount/OrderDetails";
import PaymentPage from "./pages/UserAccount/PaymentPage";
import OrderConfirmationPage from "./pages/UserAccount/OrderConfirmationPage";
import AccountInformation from "./pages/UserAccount/AccountInformation";
import Address from "./pages/UserAccount/Address";
import FavoritesPage from "./pages/Favorites/index";
import ProductDetail from "./pages/ProductDetail/index";

// Simple test component to debug
const SimpleTest = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>🎯 Loot-Lords E-commerce</h1>
    <p>✅ React Router is working!</p>
    <p>✅ App component loaded successfully!</p>
    <hr />
    <p><strong>Available routes:</strong></p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/test">Test (current)</a></li>
    </ul>
  </div>
);

const AppRoutes = () => {
  console.log("🛤️ Routes component loaded");
  
  try {
    return (
      <Router>
        <Suspense fallback={<LoadingSpinner message="Loading application..." />}>
          <Routes>
            <Route path="/test" element={<SimpleTest />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/signup-phone" element={<SignupPhone />} />
            <Route path="/signup-email" element={<SignupEmail />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/promo-products" element={<PromoProductsPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart-test" element={<CartTest />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/pay" element={<Pay />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/orders/:id" element={<OrderDetails />} />
            <Route path="/orders/:id/paynow" element={<PaymentPage />} />
            <Route
              path="/orders/:id/confirm"
              element={<OrderConfirmationPage />}
            />
            <Route path="/account" element={<AccountInformation />} />
            <Route path="/address" element={<Address />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </Router>
    );
  } catch (error) {
    console.error("❌ Error in Routes:", error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h2>Routes Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default AppRoutes;

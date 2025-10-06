import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Simple test component
const TestHome = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial' }}>
    <h1>Loot-Lords E-commerce</h1>
    <p>App is working! 🎉</p>
    <div>
      <p>Routes available:</p>
      <ul>
        <li><a href="/">Home (current)</a></li>
        <li><a href="/test">Test Route</a></li>
      </ul>
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

const AppRoutes = () => {
  console.log("Routes component loaded");
  
  return (
    <Router>
      <Suspense fallback={<div style={{padding: '20px'}}>Loading...</div>}>
        <Routes>
          <Route path="/test" element={<TestHome />} />
          <Route path="/original" element={<HomePage />} />
          <Route path="/signup-phone" element={<SignupPhone />} />
          <Route path="/signup-email" element={<SignupEmail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<TestHome />} />
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
};

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Favorites from "./pages/Favorites";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import OrderHistory from "./pages/UserAccount/OrderHistory";
import OrderDetails from "./pages/UserAccount/OrderDetails";
import PaymentPage from "./pages/UserAccount/PaymentPage";
import OrderConfirmationPage from "./pages/UserAccount/OrderConfirmationPage";
import AccountInformation from "./pages/UserAccount/AccountInformation";
import Address from "./pages/UserAccount/Address";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Standalone pages */}
        <Route path="/signup-phone" element={<SignupPhone />} />
        <Route path="/signup-email" element={<SignupEmail />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Pages with their own header/footer */}
        <Route path="/" element={<HomePage />} />
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
        <Route path="/orders/:id/confirm" element={<OrderConfirmationPage />} />
        <Route path="/account" element={<AccountInformation />} />
        <Route path="/address" element={<Address />} />

        {/* ✅ Wrap only Favorites with Header + Footer */}
        <Route
          path="/favorites"
          element={
            <>
              <Header />
              <main className="min-h-[60vh]">
                <Favorites />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React from "react";
import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";
import ErrorBoundary from "./components/common/ErrorBoundary";

function AppContent() {
  const { notification } = useCart();
  
  return (
    <div className="app" style={{ minHeight: '100vh' }}>
      <Routes />
      <Notification message={notification} />
    </div>
  );
}

function App() {
  console.log("🚀 Loot-Lords E-commerce App starting...");
  
  return (
    <ErrorBoundary>
      <CartProvider>
        <FavoritesProvider>
          <AppContent />
        </FavoritesProvider>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;

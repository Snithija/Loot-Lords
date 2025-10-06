import React from "react";
import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AppInitializer from "./components/common/AppInitializer";

function AppContent() {
  const { notification } = useCart();

  return (
    <ErrorBoundary>
      <Routes />
      <Notification message={notification} />
    </ErrorBoundary>
  );
}

function App() {
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

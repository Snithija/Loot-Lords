import React from "react";
import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AppInitializer from "./components/common/AppInitializer";
import HealthCheck from "./components/common/HealthCheck";

function AppContent() {
  const { notification } = useCart();

  return (
    <ErrorBoundary>
      <Routes />
      <Notification message={notification} />
      <HealthCheck />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AppInitializer>
        <CartProvider>
          <FavoritesProvider>
            <AppContent />
          </FavoritesProvider>
        </CartProvider>
      </AppInitializer>
    </ErrorBoundary>
  );
}

export default App;

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
  console.log("🚀 Loot-Lords App starting...");
  
  try {
    return (
      <CartProvider>
        <FavoritesProvider>
          <AppContent />
        </FavoritesProvider>
      </CartProvider>
    );
  } catch (error) {
    console.error("❌ Error in App:", error);
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'center' }}>
        <h1>🔧 Debugging Mode</h1>
        <p><strong>Error:</strong> {error.message}</p>
        <p><strong>Stack:</strong> {error.stack}</p>
      </div>
    );
  }
}

export default App;

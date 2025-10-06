import React from "react";
import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";

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
  console.log("App component loaded successfully!");
  
  try {
    return (
      <CartProvider>
        <FavoritesProvider>
          <AppContent />
        </FavoritesProvider>
      </CartProvider>
    );
  } catch (error) {
    console.error("Error in App component:", error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error Loading App</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}

export default App;

import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  console.log("App component loaded successfully!");
  
  try {
    return (
      <div className="app" style={{ minHeight: '100vh' }}>
        <CartProvider>
          <FavoritesProvider>
            <Routes />
          </FavoritesProvider>
        </CartProvider>
      </div>
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

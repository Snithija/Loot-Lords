import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  console.log("App component loaded");
  
  return (
    <div className="app">
      <CartProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;

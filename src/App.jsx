import React from "react";
import Routes from "./Routes";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Routes />
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;

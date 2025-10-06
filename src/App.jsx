import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";
import { FavoritesProvider } from "./context/FavoritesContext";

function AppContent() {
  const { notification } = useCart();

  return (
    <>
      <Routes />
      <Notification message={notification} />
    </>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </FavoritesProvider>
  );
}

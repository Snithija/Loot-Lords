import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import Notification from "./components/common/Notification";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavoritesDebugger from "./components/FavoritesDebugger";

function AppContent() {
  const { notification } = useCart();

  return (
    <>
      <Routes />
      <Notification message={notification} />
      {process.env.NODE_ENV === "development" && <FavoritesDebugger />}
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

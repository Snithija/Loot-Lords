import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Notification from "./components/common/Notification";

function AppContent() {
  const { notification } = useCart();

  return (
    <>
      <Routes />
      <Notification message={notification} />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <AppContent />
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;

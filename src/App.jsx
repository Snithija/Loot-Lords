import Routes from "./Routes";
import { CartProvider, useCart } from "./context/CartContext";
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
      <AppContent />
    </CartProvider>
  );
}

export default App;

import React, { createContext, useContext, useReducer, useEffect } from "react";

// Cart Context
const CartContext = createContext();

// Cart Actions
const cartActions = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
  LOAD_CART: "LOAD_CART",
};

// Cart Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Ensure originalPrice and discountedPrice are set if not present
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
          originalPrice: action.payload.originalPrice || action.payload.price,
          discountedPrice:
            action.payload.discountedPrice || action.payload.price,
        },
      ];

    case cartActions.REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.payload);

    case cartActions.UPDATE_QUANTITY:
      if (action.payload.quantity <= 0) {
        return state.filter((item) => item.id !== action.payload.id);
      }
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case cartActions.CLEAR_CART:
      return [];

    case cartActions.LOAD_CART:
      return action.payload;

    default:
      return state;
  }
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [notification, setNotification] = React.useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: cartActions.LOAD_CART, payload: parsedCart });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Cart functions
  const addToCart = (product) => {
    dispatch({ type: cartActions.ADD_TO_CART, payload: product });
    setNotification(`${product.name} added to cart`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (productId) => {
    dispatch({ type: cartActions.REMOVE_FROM_CART, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: cartActions.UPDATE_QUANTITY,
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: cartActions.CLEAR_CART });
  };

  // Computed values
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.discountedPrice || item.price || "$0";
      const numericPrice = parseFloat(price.toString().replace("$", "")) || 0;
      return total + numericPrice * item.quantity;
    }, 0);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    notification,
    setNotification,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

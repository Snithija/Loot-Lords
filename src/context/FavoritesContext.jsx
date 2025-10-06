import React, { createContext, useContext, useReducer, useEffect } from "react";

// Favorites Context
const FavoritesContext = createContext();

// Favorites Actions
const favoritesActions = {
  ADD_TO_FAVORITES: "ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES: "REMOVE_FROM_FAVORITES",
  LOAD_FAVORITES: "LOAD_FAVORITES",
};

// Favorites Reducer
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case favoritesActions.ADD_TO_FAVORITES:
      if (state.find((item) => item.id === action.payload.id)) {
        return state; // Already favorited
      }
      return [...state, action.payload];

    case favoritesActions.REMOVE_FROM_FAVORITES:
      return state.filter((item) => item.id !== action.payload);

    case favoritesActions.LOAD_FAVORITES:
      return action.payload;

    default:
      return state;
  }
};

// Favorites Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        const parsedFavorites = JSON.parse(savedFavorites);
        dispatch({
          type: favoritesActions.LOAD_FAVORITES,
          payload: parsedFavorites,
        });
      } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever favorites changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Favorites functions
  const addToFavorites = (product) => {
    dispatch({ type: favoritesActions.ADD_TO_FAVORITES, payload: product });
  };

  const removeFromFavorites = (productId) => {
    dispatch({
      type: favoritesActions.REMOVE_FROM_FAVORITES,
      payload: productId,
    });
  };

  const isFavorited = (productId) => {
    return favorites.some((item) => item.id === productId);
  };

  const getFavoritesCount = () => {
    return favorites.length;
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorited,
    getFavoritesCount,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use favorites context
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

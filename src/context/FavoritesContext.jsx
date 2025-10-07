import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(() => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(localStorage.getItem("favs_ids")) || [];
    } catch {
      return [];
    }
  });

  const [itemsById, setItemsById] = useState(() => {
    if (typeof window === 'undefined') return {};
    try {
      return JSON.parse(localStorage.getItem("favs_itemsById")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("favs_ids", JSON.stringify(ids));
    }
  }, [ids]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("favs_itemsById", JSON.stringify(itemsById));
    }
  }, [itemsById]);

  // Backfill stubs for old ids missing item details
  useEffect(() => {
    const missing = ids.filter((id) => !itemsById[id]);
    if (missing.length) {
      setItemsById((prev) => {
        const copy = { ...prev };
        for (const id of missing) copy[id] = copy[id] || { id };
        return copy;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids]);

  const isFav = (id) => ids.includes(id);

  const add = (id, item) => {
    setIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
    setItemsById((prev) => ({
      ...prev,
      [id]: item ? item : prev[id] || { id },
    }));
  };

  const remove = (id) => {
    setIds((prev) => prev.filter((x) => x !== id));
    setItemsById((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const toggle = (id, item) => {
    setIds((prev) => {
      if (prev.includes(id)) {
        setItemsById((prevItems) => {
          const next = { ...prevItems };
          delete next[id];
          return next;
        });
        return prev.filter((x) => x !== id);
      } else {
        setItemsById((prevItems) => ({
          ...prevItems,
          [id]: item ? item : prevItems[id] || { id },
        }));
        return [...prev, id];
      }
    });
  };

  const list = () => ids.map((id) => itemsById[id]).filter(Boolean);

  const value = useMemo(
    () => ({
      ids,
      itemsById,
      count: ids.length,
      isFav,
      add,
      remove,
      toggle,
      list,
    }),
    [ids, itemsById]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    console.error("useFavorites must be used within FavoritesProvider");
    // Return a default object to prevent crashes
    return {
      ids: [],
      itemsById: {},
      count: 0,
      isFav: () => false,
      add: () => {},
      remove: () => {},
      toggle: () => {},
      list: () => [],
    };
  }
  return ctx;
}

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
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const stored = localStorage.getItem("favs_ids");
        console.log("Loading favorites IDs from localStorage:", stored);
        return stored ? JSON.parse(stored) : [];
      }
      return [];
    } catch (error) {
      console.error("Error loading favorites IDs from localStorage:", error);
      return [];
    }
  });

  const [itemsById, setItemsById] = useState(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const stored = localStorage.getItem("favs_itemsById");
        console.log("Loading favorites items from localStorage:", stored);
        return stored ? JSON.parse(stored) : {};
      }
      return {};
    } catch (error) {
      console.error("Error loading favorites items from localStorage:", error);
      return {};
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("favs_ids", JSON.stringify(ids));
        console.log("Saved favorites IDs to localStorage:", ids);
      }
    } catch (error) {
      console.error("Error saving favorites IDs to localStorage:", error);
    }
  }, [ids]);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.setItem("favs_itemsById", JSON.stringify(itemsById));
        console.log(
          "Saved favorites items to localStorage:",
          Object.keys(itemsById)
        );
      }
    } catch (error) {
      console.error("Error saving favorites items to localStorage:", error);
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
    console.log("Toggle called with:", { id, item });
    setIds((prev) => {
      console.log("Previous IDs:", prev);
      if (prev.includes(id)) {
        console.log("Removing from favorites:", id);
        setItemsById((prevItems) => {
          const next = { ...prevItems };
          delete next[id];
          console.log("Updated items after removal:", Object.keys(next));
          return next;
        });
        const newIds = prev.filter((x) => x !== id);
        console.log("New IDs after removal:", newIds);
        return newIds;
      } else {
        console.log("Adding to favorites:", id);
        setItemsById((prevItems) => {
          const updated = {
            ...prevItems,
            [id]: item ? item : prevItems[id] || { id },
          };
          console.log("Updated items after addition:", Object.keys(updated));
          return updated;
        });
        const newIds = [...prev, id];
        console.log("New IDs after addition:", newIds);
        return newIds;
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
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}

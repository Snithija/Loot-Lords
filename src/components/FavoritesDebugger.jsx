import React, { useState, useEffect } from "react";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesDebugger = () => {
  const { ids, itemsById, count, isFav, toggle, list } = useFavorites();
  const [logs, setLogs] = useState([]);

  // Add log function
  const addLog = (message) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [...prev.slice(-9), `[${timestamp}] ${message}`]);
  };

  useEffect(() => {
    addLog(`Favorites loaded: ${count} items`);
  }, [count]);

  // Test products from different pages
  const testProducts = [
    { id: 1, name: "NewArrivals - Hoodie Gray", page: "Home/NewArrivals" },
    { id: 101, name: "PopularItems - Vans Magenta", page: "Home/PopularItems" },
    {
      id: 201,
      name: "ProductCard - Hoodie Gray",
      page: "Products/ProductCard",
    },
    { id: 301, name: "PromoGrid - Beach Hat", page: "Promos/ProductGrid" },
  ];

  const handleTestToggle = (product) => {
    addLog(`Testing ${product.page}: ${product.name}`);
    try {
      toggle(product.id, {
        id: product.id,
        name: product.name,
        image: "/images/img_frame_9.png",
        price: 50,
        rating: 4.5,
        reviews: 60,
      });
      addLog(
        `✅ Success: ${isFav(product.id) ? "Added to" : "Removed from"} favorites`
      );
    } catch (error) {
      addLog(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 max-w-md z-50">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold text-gray-800">Favorites Debug</h3>
        <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
          {count} items
        </div>
      </div>

      {/* Current Status */}
      <div className="mb-3 p-2 bg-gray-50 rounded text-xs">
        <p>
          <strong>IDs:</strong> [{ids.join(", ")}]
        </p>
        <p>
          <strong>Total:</strong> {list().length} favorites
        </p>
      </div>

      {/* Test Buttons */}
      <div className="space-y-2 mb-3">
        {testProducts.map((product) => {
          const isFavorite = isFav(product.id);
          return (
            <button
              key={product.id}
              onClick={() => handleTestToggle(product)}
              className={`w-full text-left p-2 rounded text-xs ${
                isFavorite
                  ? "bg-red-100 text-red-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="truncate">{product.name}</span>
                <span className="ml-2 font-bold">
                  {isFavorite ? "❤️" : "🤍"}
                </span>
              </div>
              <div className="text-xs opacity-70">{product.page}</div>
            </button>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mb-3">
        <button
          onClick={() => {
            addLog("Clearing all favorites...");
            ids.forEach((id) => toggle(id));
          }}
          className="flex-1 bg-red-500 text-white py-1 px-2 rounded text-xs"
        >
          Clear All
        </button>
        <button
          onClick={() => {
            addLog("Checking localStorage...");
            console.log("localStorage check:", {
              ids: localStorage.getItem("favs_ids"),
              items: localStorage.getItem("favs_itemsById"),
            });
          }}
          className="flex-1 bg-blue-500 text-white py-1 px-2 rounded text-xs"
        >
          Check Storage
        </button>
      </div>

      {/* Live Logs */}
      <div className="bg-black text-green-400 p-2 rounded text-xs max-h-32 overflow-y-auto font-mono">
        <div className="text-white mb-1">Live Debug Logs:</div>
        {logs.map((log, i) => (
          <div key={i} className="whitespace-nowrap overflow-hidden">
            {log}
          </div>
        ))}
      </div>

      {/* Toggle Visibility */}
      <button
        onClick={() => {
          const debugPanel = document.querySelector(
            "[data-favorites-debugger]"
          );
          if (debugPanel) {
            debugPanel.style.display =
              debugPanel.style.display === "none" ? "block" : "none";
          }
        }}
        className="absolute -top-2 -right-2 bg-gray-500 text-white w-6 h-6 rounded-full text-xs"
      >
        ×
      </button>
    </div>
  );
};

export default FavoritesDebugger;

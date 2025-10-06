import React, { useEffect } from "react";
import { useFavorites } from "../context/FavoritesContext";

const FavoritesTest = () => {
  const { ids, itemsById, count, isFav, add, remove, toggle, list } =
    useFavorites();

  useEffect(() => {
    console.log("FavoritesTest - Current state:", {
      ids,
      itemsById,
      count,
      totalItems: list().length,
    });
  }, [ids, itemsById, count, list]);

  const testProduct = {
    id: 999,
    name: "Test Product",
    price: 50.0,
    image: "/images/img_frame_9.png",
    rating: 4.5,
    reviews: 10,
    isFlashSale: false,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Favorites Functionality Test</h1>

      {/* Current State Display */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Current Favorites State</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <strong>Total Count:</strong> {count}
            </p>
            <p>
              <strong>IDs:</strong> [{ids.join(", ")}]
            </p>
          </div>
          <div>
            <p>
              <strong>Items:</strong>
            </p>
            <pre className="text-xs bg-white p-2 rounded overflow-auto max-h-32">
              {JSON.stringify(itemsById, null, 2)}
            </pre>
          </div>
        </div>
      </div>

      {/* Test Product */}
      <div className="border border-gray-300 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Test Product</h3>
        <div className="flex items-center gap-4">
          <img
            src={testProduct.image}
            alt={testProduct.name}
            className="w-16 h-16 object-cover rounded"
          />
          <div className="flex-1">
            <p className="font-medium">{testProduct.name}</p>
            <p className="text-gray-600">${testProduct.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">
              Rating: {testProduct.rating} ({testProduct.reviews} reviews)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">
              <strong>Is Favorite:</strong>{" "}
              {isFav(testProduct.id) ? "✅ Yes" : "❌ No"}
            </p>
            <button
              onClick={() => toggle(testProduct.id, testProduct)}
              className={`px-4 py-2 rounded text-white font-medium ${
                isFav(testProduct.id)
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isFav(testProduct.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={() => add(testProduct.id, testProduct)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Force Add Test Product
        </button>
        <button
          onClick={() => remove(testProduct.id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Force Remove Test Product
        </button>
        <button
          onClick={() => {
            console.log("Manual localStorage check:");
            console.log("favs_ids:", localStorage.getItem("favs_ids"));
            console.log(
              "favs_itemsById:",
              localStorage.getItem("favs_itemsById")
            );
          }}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Check localStorage
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("favs_ids");
            localStorage.removeItem("favs_itemsById");
            window.location.reload();
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear All Favorites
        </button>
      </div>

      {/* Favorites List */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Current Favorites List</h3>
        {list().length === 0 ? (
          <p className="text-gray-500 italic">No favorites added yet</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {list().map((item) => (
              <div key={item.id} className="bg-white p-3 rounded border">
                <p className="font-medium">{item.name || `Item ${item.id}`}</p>
                <p className="text-sm text-gray-600">ID: {item.id}</p>
                {item.price && (
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                )}
                <button
                  onClick={() => remove(item.id)}
                  className="mt-2 px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesTest;

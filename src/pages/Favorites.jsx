import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "./Products/ProductCard"; // path matches your tree

export default function Favorites() {
  const { list, count } = useFavorites();
  const items = list();

  if (!items.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold mb-2">Your Favorites</h1>
        <p className="text-gray-600">No favorites yet.</p>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Favorites ({count})</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {items.map((p) => {
            const title = p.name || p.title || "Untitled";
            const priceNow =
              typeof p.currentPrice === "number"
                ? p.currentPrice
                : typeof p.price === "number"
                  ? p.price
                  : Number(String(p.price || "").replace(/[^0-9.]/g, "")) || 0;

            const priceOld =
              typeof p.originalPrice === "number"
                ? p.originalPrice
                : Number(
                    String(p.originalPrice || "").replace(/[^0-9.]/g, "")
                  ) || undefined;

            const saleType = p.isFlashSale
              ? "flash"
              : p.discount
                ? "discount"
                : undefined;
            const saleValue =
              typeof p.discount === "string"
                ? p.discount.replace("%", "")
                : typeof p.discount === "number"
                  ? p.discount
                  : undefined;

            return (
              <ProductCard
                key={p.id}
                id={p.id}
                image={p.image || "/images/placeholder.png"}
                title={title}
                price={priceNow}
                originalPrice={priceOld}
                rating={p.rating ?? 4.5}
                reviewCount={p.reviews ?? 0}
                saleType={saleType}
                saleValue={saleValue}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

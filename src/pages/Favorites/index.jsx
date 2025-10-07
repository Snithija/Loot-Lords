import React from "react";
import { Helmet } from "react-helmet";
import { useFavorites } from "../../context/FavoritesContext";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import ProductCard from "../Products/ProductCard";

const FavoritesPage = () => {
  const { list } = useFavorites();
  const favorites = list();

  return (
    <>
      <Helmet>
        <title>My Favorites - Loot Lords</title>
        <meta
          name="description"
          content="View and manage your favorite products at Loot Lords"
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              My Favorites
            </h1>

            {favorites.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  You have no favorite items yet.
                </p>
                <p className="text-gray-400 mt-2">
                  Start adding items to your favorites!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {favorites.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    rating={product.rating}
                    reviewCount={product.reviews}
                  />
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FavoritesPage;

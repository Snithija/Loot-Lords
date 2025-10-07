import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import NewArrivals from "./NewArrivals";
import PopularItems from "./PopularItems";
import ServiceFeatures from "./ServiceFeatures";

const Home = () => {
  console.log("🏠 HomePage component loading...");

  try {
    return (
      <>
        <Helmet>
          <title>Loot-Lords - Premium Fashion E-commerce Store</title>
          <meta
            name="description"
            content="Shop premium fashion at Loot-Lords with great deals on clothing, shoes and accessories. Discover new arrivals and popular items."
          />
        </Helmet>

        <div className="flex flex-col min-h-screen bg-white">
          <Header />

          <main className="flex-1">
            <HeroSection />
            <CategorySection />
            <NewArrivals />
            <PopularItems />
            <ServiceFeatures />
          </main>

          <Footer />
        </div>
      </>
    );
  } catch (error) {
    console.error("❌ Error in HomePage:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-800 mb-4">
            Homepage Error
          </h1>
          <p className="text-red-600">{error.message}</p>
        </div>
      </div>
    );
  }
};

export default Home;

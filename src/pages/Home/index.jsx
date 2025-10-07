import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import CategorySection from './CategorySection';
import NewArrivals from './NewArrivals';
import PopularItems from './PopularItems';
import ServiceFeatures from './ServiceFeatures';

const Home = () => {
  console.log("🏠 HomePage component loading...");
  
  try {
    return (
      <>
        <Helmet>
          <title>Loot-Lords - Premium Fashion E-commerce Store</title>
          <meta name="description" content="Shop premium fashion at Loot-Lords with great deals on clothing, shoes and accessories. Discover new arrivals and popular items." />
        </Helmet>

        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          
          <main className="flex-1 p-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🛍️ Welcome to Loot-Lords
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Premium Fashion E-commerce Store
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">🆕 New Arrivals</h3>
                  <p className="text-gray-600">Discover the latest fashion trends</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">🔥 Popular Items</h3>
                  <p className="text-gray-600">Shop best-selling products</p>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">💝 Special Offers</h3>
                  <p className="text-gray-600">Amazing deals and discounts</p>
                </div>
              </div>
            </div>
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
          <h1 className="text-2xl font-bold text-red-800 mb-4">Homepage Error</h1>
          <p className="text-red-600">{error.message}</p>
        </div>
      </div>
    );
  }
};

export default Home;
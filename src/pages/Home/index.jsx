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
  console.log("HomePage component loading...");
  
  try {
    return (
      <>
        <Helmet>
          <title>Loot-Lords - Premium Fashion Store</title>
          <meta name="description" content="Shop premium fashion at Loot-Lords with great deals on clothing and accessories." />
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
    console.error("Error in HomePage:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Loot-Lords</h1>
          <p className="text-gray-600 mb-4">Loading homepage...</p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        </div>
      </div>
    );
  }
};

export default Home;
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
  
  return (
    <>
      <Helmet>
        <title>Loot-Lords - Premium Fashion E-commerce Store</title>
        <meta name="description" content="Shop premium fashion at Loot-Lords with great deals on clothing, shoes and accessories. Discover new arrivals and popular items." />
        <meta property="og:title" content="Loot-Lords - Premium Fashion E-commerce Store" />
        <meta property="og:description" content="Shop premium fashion at Loot-Lords with great deals on clothing, shoes and accessories." />
        <meta property="og:type" content="website" />
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
};

export default Home;
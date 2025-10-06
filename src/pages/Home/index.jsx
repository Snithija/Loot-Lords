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
  return (
    <>
      <Helmet>
        <title>StoreOne Fashion - 50% Off Clothing & Shoes | Premium Fashion Store</title>
        <meta
          name="description"
          content="Shop premium fashion at StoreOne with 50% off clothing and shoes. Discover new arrivals, popular items, shirts, jackets, pants and accessories with competitive pricing and fast delivery."
        />
        <meta property="og:title" content="StoreOne Fashion - 50% Off Clothing & Shoes | Premium Fashion Store" />
        <meta property="og:description" content="Shop premium fashion at StoreOne with 50% off clothing and shoes. Discover new arrivals, popular items, shirts, jackets, pants and accessories with competitive pricing and fast delivery." />
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
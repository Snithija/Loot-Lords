import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProductGrid from './ProductGrid';

const PromoProducts = () => {
  return (
    <>
      <Helmet>
        <title>StoreOne Promo Products - Up to 25% Off Clothing & Accessories</title>
        <meta name="description" content="Shop StoreOne's promotional clothing collection with up to 25% off on hats, sneakers, shirts, hoodies, jeans & jackets. Quality fashion at discounted prices with ratings & reviews." />
        <meta property="og:title" content="StoreOne Promo Products - Up to 25% Off Clothing & Accessories" />
        <meta property="og:description" content="Shop StoreOne's promotional clothing collection with up to 25% off on hats, sneakers, shirts, hoodies, jeans & jackets. Quality fashion at discounted prices with ratings & reviews." />
      </Helmet>

      <main className="w-full bg-white">
        <Header />
        <ProductGrid />
        <Footer />
      </main>
    </>
  );
};

export default PromoProducts;
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import ProductVideos from './ProductVideos';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  const breadcrumbItems = [
    { label: 'Men', href: '/men', active: false },
    { label: 'Shoes', href: '/shoes', active: false },
    { label: 'Sneakers', href: '/sneakers', active: true }
  ];

  return (
    <>
      <Helmet>
        <title>Nike Athletic 112 Sneakers $80 | Premium White & Orange Athletic Shoes</title>
        <meta name="description" content="Shop Nike Athletic 112 sneakers for $80. Available in White and Orange colors with 4.5-star rating. Watch product videos, read reviews, and explore related athletic footwear from top brands." />
        <meta property="og:title" content="Nike Athletic 112 Sneakers $80 | Premium White & Orange Athletic Shoes" />
        <meta property="og:description" content="Shop Nike Athletic 112 sneakers for $80. Available in White and Orange colors with 4.5-star rating. Watch product videos, read reviews, and explore related athletic footwear from top brands." />
      </Helmet>

      <main className="bg-white">
        <Header />
        
        {/* Breadcrumb Navigation */}
        <section className="w-full">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-5">
            <BreadCrumb 
              items={breadcrumbItems}
              className="text-base font-bold"
              layout_gap="gap-2"
              layout_justify_content="flex-start"
              layout_align_items="center"
              layout_width="w-full"
              margin="m-0"
              position="relative"
              size="base"
              onItemClick={() => {}}
            />
          </div>
        </section>

        {/* Product Details Section */}
        <section className="w-full py-8 md:py-10">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <ProductImages />
              <ProductInfo />
            </div>
          </div>
        </section>

        {/* Product Videos Section */}
        <ProductVideos />

        {/* Related Products Section */}
        <RelatedProducts />

        <Footer />
      </main>
    </>
  );
};

export default ProductDetail;
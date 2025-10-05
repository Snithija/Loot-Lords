import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';


// ...existing code...
import ProjectGrid from './ProductGrid';
// ...existing code...
                <div className="flex-1 bg-white border border-[#dedee1] rounded-lg p-4 sm:p-6 lg:p-8">
                  <ProjectGrid />
                </div>
// ...existing code...

const ProductsPage = () => {
  const breadcrumbItems = [
    { label: 'Lifestyle', href: '/', active: false },
    { label: 'Clothing', href: '/clothing', active: false },
    { label: 'Hoodie & Sweatshirt', href: '/products', active: true }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Hoodies & Sweatshirts Collection | StyleHub Fashion Store</title>
        <meta 
          name="description" 
          content="Discover our premium collection of hoodies and sweatshirts from top brands like Levi's, Calvin Klein, and more. Filter by price, color, size with exclusive flash sale deals. Free shipping on orders over $50." 
        />
        <meta property="og:title" content="Premium Hoodies & Sweatshirts Collection | StyleHub Fashion Store" />
        <meta property="og:description" content="Discover our premium collection of hoodies and sweatshirts from top brands like Levi's, Calvin Klein, and more. Filter by price, color, size with exclusive flash sale deals. Free shipping on orders over $50." />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <Header />

        <main className="flex-1">
          {/* Breadcrumb Section */}
          <section className="w-full bg-white py-4 lg:py-6">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 lg:gap-6">
                <BreadCrumb 
                  items={breadcrumbItems}
                  className="text-lg font-bold"
                  layout_gap="4"
                  layout_justify_content="start"
                  layout_align_items="center"
                  layout_width="full"
                  position="static"
                  variant="default"
                  size="medium"
                  onItemClick={() => {}}
                />
                
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-bold text-[#000000]">
                    Explore All Product
                  </h1>
                  <span className="text-base text-[#000000]">
                    (43 Products Found)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content Section */}
          <section className="w-full bg-white py-4 lg:py-6">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Filter Sidebar */}
                <div className="w-full lg:w-auto lg:flex-shrink-0">
                  <FilterSidebar />
                </div>

                {/* Product Grid */}
                <div className="flex-1 bg-white border border-[#dedee1] rounded-lg p-4 sm:p-6 lg:p-8">
                  <ProductGrid />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
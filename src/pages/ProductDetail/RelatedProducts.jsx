import React from 'react';
import RatingBar from '../../components/ui/RatingBar';

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Vans Magenta',
      price: '$ 75.00',
      originalPrice: '$ 80.00',
      image: '/images/img_frame_9.png',
      badge: 'Flash Sale',
      badgeColor: 'bg-black'
    },
    {
      id: 2,
      name: 'Converse Low 12',
      price: '$ 90.00',
      originalPrice: '$ 100.00',
      image: '/images/img_frame_9_294x248.png',
      badge: '10%',
      badgeColor: 'bg-green-600'
    },
    {
      id: 3,
      name: 'Leather Shoes',
      price: '$ 200.00',
      originalPrice: '$ 220.00',
      image: '/images/img_frame_9_1.png',
      badge: '10%',
      badgeColor: 'bg-green-600'
    },
    {
      id: 4,
      name: 'Hipskick S5',
      price: '$ 55.00',
      originalPrice: null,
      image: '/images/img_frame_9_2.png',
      badge: null,
      badgeColor: null
    },
    {
      id: 5,
      name: 'Low Boots Leather',
      price: '$ 100.00',
      originalPrice: null,
      image: '/images/img_frame_9_3.png',
      badge: null,
      badgeColor: null
    },
    {
      id: 6,
      name: 'Vans Creme',
      price: '$ 88.00',
      originalPrice: '$ 80.00',
      image: '/images/img_frame_9_4.png',
      badge: '10%',
      badgeColor: 'bg-green-600'
    },
    {
      id: 7,
      name: 'Green Outdoor Shoes',
      price: '$ 150.00',
      originalPrice: '$ 160.00',
      image: '/images/img_frame_9_5.png',
      badge: 'Flash Sale',
      badgeColor: 'bg-black'
    },
    {
      id: 8,
      name: 'Birkenstock Sandals',
      price: '$ 55.00',
      originalPrice: null,
      image: '/images/img_frame_9_6.png',
      badge: null,
      badgeColor: null
    }
  ];

  return (
    <section className="w-full py-8 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Related Product
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products?.map((product) => (
              <div
                key={product?.id}
                className="bg-white border border-gray-300 rounded-2xl p-2 md:p-3 hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="relative mb-3 md:mb-4">
                  <img
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-[200px] sm:h-[240px] md:h-[294px] object-cover rounded-xl"
                  />
                  
                  {/* Badge and Favorite Button */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                    {product?.badge && (
                      <span className={`${product?.badgeColor} text-white text-sm font-medium px-2 py-1 rounded-2xl`}>
                        {product?.badge}
                      </span>
                    )}
                    
                    <button className="bg-white hover:bg-gray-100 rounded-2xl p-1.5 shadow-md transition-colors ml-auto">
                      <img src="/images/img_favorite.svg" alt="Add to wishlist" className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2 md:space-y-3 px-1">
                  <h3 className="text-base font-medium text-black">
                    {product?.name}
                  </h3>
                  
                  <div className="flex items-center gap-1">
                    <RatingBar 
                      rating={4.5} 
                      readOnly={true} 
                      size="small"
                      layout_width="auto"
                      position="relative"
                      onChange={() => {}}
                      className=""
                    />
                    <span className="text-xs text-gray-500 ml-1">
                      4.5 (60 Review)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-black">
                      {product?.price}
                    </span>
                    {product?.originalPrice && (
                      <span className="text-sm font-medium text-green-600">
                        {product?.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
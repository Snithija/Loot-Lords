import React, { useState } from 'react';

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categories = [
    {
      id: 1,
      name: 'Clothing',
      image: '/images/img_0x0.png'
    },
    {
      id: 2,
      name: 'Hoodie',
      image: '/images/img_1.png'
    },
    {
      id: 3,
      name: 'Jacket',
      image: '/images/img_2.png'
    },
    {
      id: 4,
      name: 'Pants',
      image: '/images/img_3.png'
    },
    {
      id: 5,
      name: 'Accessories',
      image: '/images/img_4.png'
    },
    {
      id: 6,
      name: 'Sports Wear',
      image: '/images/img_5.png'
    }
  ];

  const nextCategory = () => {
    setCurrentIndex((prev) => (prev + 1) % categories?.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prev) => (prev - 1 + categories?.length) % categories?.length);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[124px]">
        <div className="flex flex-col gap-[18px]">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-[30px] sm:leading-[38px] md:leading-[46px] text-[#000000] font-['Plus_Jakarta_Sans']">
                Browse By Category
              </h2>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex gap-[10px] items-center pr-[10px] mt-1">
              <button
                onClick={prevCategory}
                className="bg-[#cfe6d5] rounded-[20px] p-[10px] hover:bg-[#5da96a] hover:opacity-80 transition-all duration-300"
                aria-label="Previous category"
              >
                <img 
                  src="/images/img_arrow_left.svg" 
                  alt="Previous" 
                  className="w-5 h-5"
                />
              </button>
              <button
                onClick={nextCategory}
                className="bg-[#cfe6d5] rounded-[20px] p-[10px] hover:bg-[#5da96a] hover:opacity-80 transition-all duration-300"
                aria-label="Next category"
              >
                <img 
                  src="/images/img_chevron.svg" 
                  alt="Next" 
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories?.map((category) => (
              <div key={category?.id} className="w-full">
                <div className="relative w-full">
                  {/* Category Image */}
                  <div 
                    className="w-full h-[120px] sm:h-[140px] md:h-[160px] bg-cover bg-center bg-no-repeat rounded-t-[16px]"
                    style={{ backgroundImage: `url(${category?.image})` }}
                  />
                  
                  {/* Category Label */}
                  <div className="w-full bg-[#f5f5f5] border border-[#cbcbcb] border-t-0 rounded-b-[16px] p-[6px] flex justify-center items-center">
                    <span className="text-[14px] sm:text-[16px] font-bold leading-[18px] sm:leading-[21px] text-[#000000] font-['Plus_Jakarta_Sans'] text-center">
                      {category?.name}
                    </span>
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

export default CategorySection;
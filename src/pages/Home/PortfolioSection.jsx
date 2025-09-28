import React, { useState } from 'react';
import List from '../../components/common/List';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterButtons = [
    { text: 'All', active: true },
    { text: 'UI', active: false },
    { text: 'UX', active: false },
    { text: 'Web Design', active: false }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: '/images/img_course_website_landing.png',
      category: 'Web Design',
      title: 'Course Website Landing'
    },
    {
      id: 2,
      images: ['/images/img_rectangle.png', '/images/img_rectangle_168x268.png'],
      category: 'UI',
      title: 'Mobile App Design'
    },
    {
      id: 3,
      images: ['/images/img_rectangle_170x190.png', '/images/img_rectangle_1.png', '/images/img_rectangle_2.png'],
      category: 'UX',
      title: 'User Experience Design'
    }
  ];

  const handleFilterClick = (filterText) => {
    setActiveFilter(filterText);
  };

  return (
    <section className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative py-16 md:py-24">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Scattered tech icons throughout the background */}
            <img 
              src="/images/img_macbook_cyan_600.svg" 
              alt="Background element"
              className="absolute top-4 left-4 w-10 sm:w-12 md:w-[50px] h-auto opacity-30"
            />
            <img 
              src="/images/img_food_cyan_600.svg" 
              alt="Background element"
              className="absolute top-4 left-20 sm:left-28 w-12 sm:w-14 md:w-[58px] h-auto opacity-30 ml-10"
            />
            <img 
              src="/images/img_angle_brace_cyan_600.svg" 
              alt="Background element"
              className="absolute top-8 right-8 sm:right-12 w-6 sm:w-7 md:w-[28px] h-auto opacity-30 mt-1.5 ml-7"
            />
            
            {/* More background elements scattered throughout */}
            <img 
              src="/images/img_lightbulb_cyan_600.svg" 
              alt="Background element"
              className="absolute top-1/4 left-1/4 w-10 sm:w-11 md:w-[44px] h-auto opacity-20"
            />
            <img 
              src="/images/img_keyboard_cyan_600_70x82.svg" 
              alt="Background element"
              className="absolute top-1/3 right-1/4 w-16 sm:w-18 md:w-[82px] h-auto opacity-20"
            />
            <img 
              src="/images/img_glasses_cyan_600.svg" 
              alt="Background element"
              className="absolute bottom-1/3 left-1/3 w-7 sm:w-8 md:w-[32px] h-auto opacity-25"
            />
            <img 
              src="/images/img_deadlines_cyan_600.svg" 
              alt="Background element"
              className="absolute bottom-1/4 right-1/3 w-12 sm:w-14 md:w-[58px] h-auto opacity-25"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="mb-8 md:mb-12">
                <span 
                  className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    lineHeight: '96px',
                    color: '#eeeeee'
                  }}
                >
                  My recent{' '}
                </span>
                <span 
                  className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    lineHeight: '96px',
                    color: '#00adb5'
                  }}
                >
                  works
                </span>
              </h2>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12 mx-auto max-w-md">
                {filterButtons?.map((filter, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterClick(filter?.text)}
                    className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bg-background-accent focus:ring-offset-2 ${
                      activeFilter === filter?.text
                        ? 'bg-background-accent text-text-primary' :'bg-background-secondary-light text-text-primary hover:bg-background-secondary'
                    }`}
                    style={{
                      fontSize: '18px',
                      fontFamily: 'Poppins',
                      fontWeight: '700',
                      lineHeight: '27px',
                      borderRadius: '22px',
                      boxShadow: activeFilter !== filter?.text ? '0px 4px 8px #888888ff' : 'none'
                    }}
                  >
                    {filter?.text}
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Grid */}
            <List 
              className="flex-row flex-nowrap gap-8 md:gap-12 overflow-x-auto md:overflow-x-visible justify-center items-center"
              layout_gap="gap-8 md:gap-12"
              layout_justify_content="justify-center"
              layout_align_items="items-center"
            >
              {portfolioItems?.map((item) => (
                <div
                  key={item?.id}
                  className="flex-shrink-0 w-64 sm:w-80 md:w-full md:flex-1 max-w-sm"
                >
                  <div 
                    className="bg-background-secondary-light rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{
                      borderRadius: '16px',
                      boxShadow: '0px 4px 4px #888888ff'
                    }}
                  >
                    {/* Portfolio Item Content */}
                    {item?.image ? (
                      // Single image item
                      (<div className="w-full h-32 sm:h-40 md:h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={item?.image}
                          alt={item?.title}
                          className="w-full h-full object-cover"
                        />
                      </div>)
                    ) : (
                      // Multiple images item
                      (<div className="relative w-full h-32 sm:h-40 md:h-48 mb-4">
                        {item?.images?.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${item?.title} ${imgIndex + 1}`}
                            className={`absolute w-3/4 h-full object-cover rounded-lg ${
                              imgIndex === 0 ? 'top-0 left-0 z-10' : 
                              imgIndex === 1 ? 'top-3 right-0 z-20': 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'
                            }`}
                            style={{
                              marginLeft: imgIndex === 1 ? '-22px' : '0'
                            }}
                          />
                        ))}
                      </div>)
                    )}

                    {/* Item Info */}
                    <div className="text-center">
                      <span 
                        className="text-sm text-text-secondary mb-2 block"
                        style={{
                          fontSize: '14px',
                          fontFamily: 'Poppins',
                          fontWeight: '400',
                          color: '#eeeeee7f'
                        }}
                      >
                        {item?.category}
                      </span>
                      <h3 
                        className="font-semibold text-text-primary"
                        style={{
                          fontSize: '16px',
                          fontFamily: 'Poppins',
                          fontWeight: '600',
                          color: '#eeeeee'
                        }}
                      >
                        {item?.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </List>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
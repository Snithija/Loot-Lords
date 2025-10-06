import React from 'react';

const ServiceFeatures = () => {
  const features = [
    {
      id: 1,
      icon: '/images/img_vector_green_400.svg',
      title: 'Professional Service',
      description: 'Efficient customer from passionate team'
    },
    {
      id: 2,
      icon: '/images/img_bag.svg',
      title: 'Safe Transactions',
      description: 'Various Reliable Payment Options'
    },
    {
      id: 3,
      icon: '/images/img_frame_26086777_green_400.svg',
      title: 'Secure & Swift Delivery',
      description: 'Fast and Reliable Shipping'
    },
    {
      id: 4,
      icon: '/images/img_union.svg',
      title: 'Premium Quality Guaranteed',
      description: 'Top-Notch Craftsmanship'
    }
  ];

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[124px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 py-3 px-[6px]">
          
          {features?.map((feature, index) => (
            <div key={feature?.id} className={`flex flex-col sm:flex-row items-start gap-4 w-full lg:w-1/4 ${index < 3 ? 'lg:pr-8' : ''}`}>
              
              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <div className="flex-shrink-0 self-center">
                  <img 
                    src={feature?.icon} 
                    alt={feature?.title}
                    className={`${
                      feature?.id === 1 ? 'w-[26px] h-[30px]' :
                      feature?.id === 2 ? 'w-9 h-9' :
                      feature?.id === 3 ? 'w-[30px] h-[22px]': 'w-[30px] h-[30px]'
                    }`}
                  />
                </div>
                
                <div className="flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-[14px] font-semibold leading-[18px] text-[#000000] font-['Plus_Jakarta_Sans']">
                    {feature?.title}
                  </h3>
                  <p className="text-[14px] font-normal leading-[17px] sm:leading-[18px] text-[#000000] font-['Plus_Jakarta_Sans'] max-w-[200px] sm:max-w-none">
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
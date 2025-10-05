import React from 'react';
import Button from '../../components/ui/Button';
import PagerIndicator from '../../components/ui/PagerIndicator';

const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1190px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[360px] rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/img_0x0.png)' }}
          />
          
          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-12 lg:p-20">
            <div className="max-w-md">
              <h1 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2d2d2d] mb-4 sm:mb-6 leading-tight shadow-[2px_4px_2px_#e1e1e1]"
                style={{
                  fontFamily: 'Plus Jakarta Sans',
                  fontSize: '36px',
                  fontWeight: '700',
                  lineHeight: '45px',
                  color: '#2d2d2d'
                }}
              >
                50% off for clothing and shoes
              </h1>
              
              <Button
                text="Shop Now"
                text_font_size="20"
                text_font_family="Plus Jakarta Sans"
                text_font_weight="700"
                text_line_height="26px"
                text_color="#ffffff"
                fill_background_color="#5da96a"
                border_border_radius="4px"
                padding="12px 34px"
                className="inline-block"
                layout_width="auto"
                position="relative"
                variant="primary"
                size="medium"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
        
        {/* Pager Indicator */}
        <div className="flex justify-start mt-6 ml-9">
          <PagerIndicator
            totalPages={4}
            currentPage={1}
            variant="dots"
            className="gap-2"
            layout_width="auto"
            margin="0"
            position="relative"
            size="medium"
            onPageChange={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
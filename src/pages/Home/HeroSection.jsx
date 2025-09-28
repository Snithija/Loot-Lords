import React from 'react';
import Button from '../../components/ui/Button';
import IconButton from '../../components/ui/IconButton';

const HeroSection = () => {
  const handleHireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    alert('CV download functionality would be implemented here');
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-52 sm:gap-40 md:gap-52 py-12 md:py-16">
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16">
            {/* Left Content */}
            <div className="flex flex-col lg:flex-row items-end lg:items-center w-full lg:flex-1">
              {/* Decorative Vector */}
              <div className="flex justify-end lg:justify-start w-full lg:w-auto mb-4 lg:mb-0 lg:mr-4">
                <img 
                  src="/images/img_vector_187.svg" 
                  alt="Decorative element"
                  className="w-16 h-32 sm:w-20 sm:h-40 md:w-24 md:h-48 lg:w-[122px] lg:h-[234px]"
                />
              </div>

              {/* Text and Buttons */}
              <div className="flex flex-col gap-8 md:gap-12 w-full lg:flex-1 -ml-2 lg:-ml-4">
                {/* Main Heading */}
                <h1 className="w-full text-center lg:text-left">
                  <span 
                    className="block text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-tight"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: '700',
                      lineHeight: '96px',
                      color: '#eeeeee'
                    }}
                  >
                    CREATIVE UI{' '}
                  </span>
                  <span 
                    className="block text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-tight"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: '700',
                      lineHeight: '96px',
                      color: '#00adb5'
                    }}
                  >
                    DESIGNER
                  </span>
                </h1>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                  <Button
                    text="Hire me"
                    onClick={handleHireClick}
                    className="w-full sm:w-auto"
                    effect_box_shadow="0px 4px 4px #888888ff"
                    layout_align_self="auto"
                    layout_width="auto"
                    padding="12px 24px"
                    position="static"
                    layout_gap="8px"
                    margin="0"
                    variant="primary"
                    size="medium"
                  />
                  
                  <Button
                    text="Download CV"
                    text_color="#eeeeee"
                    fill_background_color="#393e46bf"
                    effect_box_shadow="0px 4px 4px #888888ff"
                    className="w-full sm:w-auto flex items-center gap-2 ml-0 sm:ml-6"
                    onClick={handleDownloadCV}
                    layout_align_self="auto"
                    layout_width="auto"
                    padding="12px 24px"
                    position="static"
                    layout_gap="8px"
                    margin="0"
                    variant="secondary"
                    size="medium"
                  >
                    <span>Download CV</span>
                    <img 
                      src="/images/img_download.svg" 
                      alt="Download"
                      className="w-6 h-6"
                    />
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration Stack */}
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl lg:w-[42%] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[654px]">
              {/* Background Pattern */}
              <img 
                src="/images/img_doodles_mixed_round.svg" 
                alt="Background pattern"
                className="absolute top-0 left-4 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[514px] h-auto z-0"
              />
              
              {/* Main Character Illustration */}
              <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[280px] sm:h-[320px] md:h-[360px] lg:h-[384px] z-10">
                {/* Character Base */}
                <div className="relative w-full h-full">
                  {/* Various illustration elements */}
                  <img 
                    src="/images/img_group_58.svg" 
                    alt="Character element"
                    className="absolute top-0 right-6 w-[100px] sm:w-[110px] md:w-[120px] lg:w-[130px] h-auto"
                  />
                  <img 
                    src="/images/img_vector_53.svg" 
                    alt="Character element"
                    className="absolute top-16 sm:top-20 right-0 w-[130px] sm:w-[140px] md:w-[155px] lg:w-[168px] h-auto -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-[52px]"
                  />
                  <img 
                    src="/images/img_rectangle_53.svg" 
                    alt="Character element"
                    className="absolute top-16 sm:top-20 left-1 w-[32px] sm:w-[36px] md:w-[40px] lg:w-[42px] h-auto rounded-sm"
                  />
                  <img 
                    src="/images/img_vector_54.svg" 
                    alt="Character element"
                    className="absolute top-32 sm:top-36 md:top-40 right-2 w-[130px] sm:w-[145px] md:w-[160px] lg:w-[172px] h-auto -mt-16 sm:-mt-18 md:-mt-20 lg:-mt-[82px]"
                  />
                  <img 
                    src="/images/img_union.svg" 
                    alt="Character element"
                    className="absolute bottom-12 sm:bottom-14 md:bottom-16 left-0 w-full max-w-[200px] sm:max-w-[230px] md:max-w-[250px] lg:max-w-[272px] h-auto -mt-16 sm:-mt-18 md:-mt-20 lg:-mt-[82px]"
                  />
                </div>
              </div>

              {/* Additional decorative elements */}
              <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[280px] md:w-[320px] lg:w-[348px] h-6 bg-background-overlay rounded-full"></div>
              
              {/* Character shadow/base */}
              <img 
                src="/images/img_rectangle_59.svg" 
                alt="Character base"
                className="absolute bottom-20 sm:bottom-24 left-3 w-[260px] sm:w-[290px] md:w-[320px] lg:w-[350px] h-auto z-5"
              />
            </div>
          </div>

          {/* Scroll Down Button */}
          <div className="flex justify-center mr-0 lg:mr-64">
            <IconButton
              src="/images/img_frame_7.svg"
              fill_background_color="#393e46bf"
              effect_box_shadow="0px 4px 8px #888888ff"
              padding="t=30px,r=30px,b=30px,l=30px"
              onClick={handleScrollDown}
              className="hover:opacity-80 transition-opacity duration-200"
              alt="Scroll down"
              layout_width="auto"
              margin="0"
              position="static"
              variant="default"
              size="medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
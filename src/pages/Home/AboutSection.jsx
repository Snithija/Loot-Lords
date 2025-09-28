import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-background-dark">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-8 lg:gap-16 py-16 md:py-24 mt-32 lg:mt-[134px] mr-0 lg:mr-28 ml-0 lg:ml-24">
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-[46%] mb-6 lg:mb-0">
            {/* Decorative Vector */}
            <img 
              src="/images/img_vector_141.svg" 
              alt="Decorative element"
              className="w-12 h-9 sm:w-14 sm:h-11 md:w-[60px] md:h-[46px] mb-8 md:mb-16"
            />

            {/* About Title and Illustration */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end w-full gap-6 lg:gap-8 mt-16 lg:mt-[70px]">
              <h2 className="text-center lg:text-left">
                <span 
                  className="text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight"
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: '700',
                    lineHeight: '96px',
                    color: '#eeeeee'
                  }}
                >
                  About{' '}
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
                  me
                </span>
              </h2>

              {/* Small Illustration */}
              <div className="flex flex-col items-center w-full lg:w-[42%] px-4 lg:px-8">
                <div className="flex items-center justify-center w-full mb-2 lg:mb-0 px-4 lg:px-[18px]">
                  <div className="flex items-center gap-2">
                    <img 
                      src="/images/img_vector_64.svg" 
                      alt="Design element"
                      className="w-1 h-1.5 self-end"
                    />
                    <img 
                      src="/images/img_vector_63.svg" 
                      alt="Design element"
                      className="w-1 h-2 ml-2"
                    />
                  </div>
                </div>

                <div className="flex items-start w-full -mt-0.5 lg:-mt-[2px]">
                  <div className="relative w-[30%] h-[76px]">
                    <div className="flex items-center justify-center w-auto h-auto">
                      <img 
                        src="/images/img_vector_57.svg" 
                        alt="Design element"
                        className="w-3 h-2 self-end"
                      />
                      <img 
                        src="/images/img_vector_55.svg" 
                        alt="Design element"
                        className="w-[46px] h-16 -ml-3"
                      />
                    </div>
                    <img 
                      src="/images/img_vector_56.svg" 
                      alt="Design element"
                      className="absolute bottom-0 left-0 w-[18px] h-5"
                    />
                    <div className="absolute top-1 left-0 flex items-start w-full h-auto">
                      <img 
                        src="/images/img_vector_65.svg" 
                        alt="Design element"
                        className="w-1.5 h-2 mt-1.5 ml-2"
                      />
                      <img 
                        src="/images/img_vector_58.svg" 
                        alt="Design element"
                        className="w-3 h-5 self-end ml-1.5"
                      />
                      <div className="flex flex-col gap-8 items-start self-center w-auto ml-2">
                        <img 
                          src="/images/img_vector_62.svg" 
                          alt="Design element"
                          className="w-2 h-1 self-end"
                        />
                        <img 
                          src="/images/img_vector_59_cyan_600.svg" 
                          alt="Design element"
                          className="w-1 h-0.5"
                        />
                      </div>
                    </div>
                  </div>
                  <img 
                    src="/images/img_vector_60.svg" 
                    alt="Design element"
                    className="w-1.5 h-0.5 mt-8 -ml-0.5"
                  />
                  <img 
                    src="/images/img_vector_61_cyan_600.svg" 
                    alt="Design element"
                    className="w-2 h-1 mt-4 -ml-0.5"
                  />
                </div>
              </div>
            </div>

            {/* About Description */}
            <p 
              className="w-full lg:w-[68%] mt-8 md:mt-12 text-left"
              style={{
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '27px',
                color: '#eeeeeebf'
              }}
            >
              <span style={{ color: '#eeeeeebf' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... 
              </span>
              <span 
                style={{
                  fontSize: '18px',
                  fontFamily: 'Poppins',
                  fontWeight: '700',
                  lineHeight: '27px',
                  color: '#eeeeee'
                }}
              >
                Read more
              </span>
            </p>

            {/* Additional Decorative Element */}
            <img 
              src="/images/img_vector_186.svg" 
              alt="Decorative element"
              className="w-[120px] sm:w-[140px] md:w-[156px] h-auto mt-16 ml-32 lg:ml-40"
            />
          </div>

          {/* Right Content - Character Illustration */}
          <div className="relative w-full lg:w-auto lg:flex-1 h-[400px] sm:h-[500px] md:h-[592px] self-end">
            {/* Main Character Container */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:transform-none lg:bottom-center w-[280px] sm:w-[350px] md:w-[448px] h-[250px] sm:w-[300px] md:h-[368px]">
              {/* Character Illustration */}
              <img 
                src="/images/img_group_62.svg" 
                alt="About me illustration"
                className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[412px] h-auto"
              />
              
              {/* Character Shadow */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[280px] md:w-[348px] h-6 rounded-full mt-2 lg:-mt-2 mr-12 lg:mr-[48px] ml-12 lg:ml-[52px]"
                style={{ backgroundColor: '#0000007f' }}
              ></div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 w-full h-full">
              {/* Various decorative tech elements scattered around */}
              <img 
                src="/images/img_macbook.svg" 
                alt="Tech element"
                className="absolute top-4 left-4 w-12 sm:w-14 md:w-[66px] h-auto"
              />
              <img 
                src="/images/img_food.svg" 
                alt="Tech element"
                className="absolute top-4 left-20 sm:left-24 md:left-32 w-14 sm:w-16 md:w-[74px] h-auto ml-12 lg:ml-[54px]"
              />
              <img 
                src="/images/img_angle_brace.svg" 
                alt="Tech element"
                className="absolute top-6 right-8 sm:right-12 md:right-16 w-7 sm:w-8 md:w-[36px] h-auto mt-2 ml-8 lg:ml-10"
              />
              
              {/* More scattered elements */}
              <img 
                src="/images/img_lightbulb.svg" 
                alt="Tech element"
                className="absolute top-1/4 right-4 w-12 sm:w-14 md:w-[56px] h-auto mt-2"
              />
              <img 
                src="/images/img_keyboard.svg" 
                alt="Tech element"
                className="absolute top-1/4 right-0 w-20 sm:w-24 md:w-[106px] h-auto"
              />
              
              {/* Bottom elements */}
              <img 
                src="/images/img_macbook.svg" 
                alt="Tech element"
                className="absolute bottom-1/4 left-8 w-12 sm:w-14 md:w-[66px] h-auto"
              />
              <img 
                src="/images/img_glasses.svg" 
                alt="Tech element"
                className="absolute bottom-1/4 left-20 w-8 sm:w-9 md:w-[42px] h-auto ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
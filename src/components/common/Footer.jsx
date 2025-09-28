import React from 'react';
import IconButton from '../ui/IconButton';

const Footer = () => {
  const navigationItems = [
    { icon: '/images/img_home.svg', text: 'Home', href: '#home' },
    { icon: '/images/img_user.svg', text: 'About me', href: '#about' },
    { icon: '/images/img_phone.svg', text: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: '/images/img_facebook.svg', href: '#', alt: 'Facebook' },
    { icon: '/images/img_frame_26.svg', href: '#', alt: 'LinkedIn' },
    { icon: '/images/img_twitter.svg', href: '#', alt: 'Twitter' },
    { icon: '/images/img_youtube.svg', href: '#', alt: 'YouTube' }
  ];

  const handleNavClick = (href) => {
    const targetId = href?.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-bg-footer-background">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-end pt-16 md:pt-24 pb-8">
          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-16 w-full max-w-2xl mb-8 md:mb-12">
            {navigationItems?.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item?.href)}
                className="flex items-center gap-2 p-2 hover:text-bg-background-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bg-background-accent focus:ring-offset-2"
              >
                <img 
                  src={item?.icon} 
                  alt={item?.text}
                  className="w-6 h-6"
                />
                <span 
                  className="text-text-primary"
                  style={{
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    lineHeight: '27px',
                    color: '#eeeeee'
                  }}
                >
                  {item?.text}
                </span>
              </button>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12">
            {socialLinks?.map((social, index) => (
              <IconButton
                key={index}
                src={social?.icon}
                alt={social?.alt}
                fillStyleCss="background-color=#393e46"
                borderStyleCss="border_radius=24px"
                padding="t=12px,r=12px,b=12px,l=12px"
                effect_box_shadow=""
                layout_width="auto"
                margin=""
                position="relative"
                variant="default"
                size="medium"
                className="hover:opacity-80 transition-opacity duration-200"
                onClick={() => window.open(social?.href, '_blank')}
              />
            ))}
          </div>

          {/* Terms and Privacy */}
          <div className="flex justify-center items-center p-4 md:p-12">
            <p 
              className="text-center text-text-tertiary"
              style={{
                fontSize: '18px',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '27px',
                color: '#eeeeeebf'
              }}
            >
              Terms of Service - Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
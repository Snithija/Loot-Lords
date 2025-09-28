import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start py-6 md:py-12">
          {/* Logo */}
          <div className="flex items-center">
            <h1 
              className="text-lg md:text-2xl font-bold text-text-primary"
              style={{
                fontSize: '24px',
                fontFamily: 'Oswald',
                fontWeight: '700',
                lineHeight: '36px',
                color: '#eeeeee'
              }}
            >
              SaulDesign
            </h1>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-2 text-text-primary hover:text-bg-background-accent transition-colors"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <HeaderMenu onItemClick={() => {}} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <HeaderMenu mobile={true} onItemClick={() => setMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
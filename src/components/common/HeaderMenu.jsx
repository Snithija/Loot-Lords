import React from 'react';
import HeaderMenuItem from './HeaderMenuItem';

const HeaderMenu = ({ mobile = false, onItemClick }) => {
  const menuItems = [
    { text: 'Home', href: '#home' },
    { text: 'About Me', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ];

  const handleItemClick = (href) => {
    const targetId = href?.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <nav className={`flex ${mobile ? 'flex-col space-y-2' : 'flex-row space-x-12'}`}>
      {menuItems?.map((item, index) => (
        <HeaderMenuItem
          key={index}
          text={item?.text}
          onClick={() => handleItemClick(item?.href)}
          className={mobile ? 'w-full text-left' : ''}
          layout_width="auto"
        />
      ))}
    </nav>
  );
};

export default HeaderMenu;
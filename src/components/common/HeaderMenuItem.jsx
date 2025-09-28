import React from 'react';
import { twMerge } from 'tailwind-merge';

const HeaderMenuItem = ({
  // Required parameters with defaults
  text = "Home",
  text_font_size = "18",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "27px",
  text_text_align = "left",
  text_color = "#eeeeee",
  
  // Optional parameters (no defaults)
  layout_width,
  
  // Standard React props
  className,
  onClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-auto',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const menuItemStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '18px',
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '27px',
    textAlign: text_text_align || 'left',
    color: text_color || '#eeeeee',
  };

  // Safe click handler
  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      onClick(event);
    }
  };

  return (
    <button
      onClick={handleClick}
      style={menuItemStyles}
      className={twMerge(
        'hover:text-bg-background-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-bg-background-accent focus:ring-offset-2',
        optionalClasses,
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
};

export default HeaderMenuItem;
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchClasses = cva(
  'flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500',
  {
    variants: {
      variant: {
        default: 'bg-gray-100 hover:bg-gray-200',
        outline: 'border border-gray-300 bg-white hover:border-gray-400',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const SearchView = ({
  // Required parameters with defaults
  placeholder = "Search",
  text_font_size = "20",
  text_font_family = "Plus Jakarta Sans",
  text_font_weight = "700",
  text_line_height = "26px",
  text_text_align = "left",
  text_color = "#717171",
  fill_background_color = "#ededed",
  border_border_radius = "20px",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  value,
  onChange,
  onSubmit,
  leftIcon = "/images/img_search.svg",
  rightIcon,
  disabled = false,
  ...props
}) => {
  const [searchValue, setSearchValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const containerStyles = {
    backgroundColor: fill_background_color,
    borderRadius: border_border_radius,
  };

  const inputStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
  };

  const handleInputChange = (event) => {
    const newValue = event?.target?.value;
    setSearchValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const handleSubmit = (event) => {
    event?.preventDefault();
    if (typeof onSubmit === 'function') {
      onSubmit(searchValue);
    }
  };

  const handleKeyPress = (event) => {
    if (event?.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        style={containerStyles}
        className={twMerge(
          searchClasses({ variant, size }),
          optionalClasses,
          'relative',
          className
        )}
      >
        {leftIcon && (
          <div className="flex-shrink-0 pl-4">
            <img 
              src={leftIcon} 
              alt="Search" 
              className="w-8 h-8"
            />
          </div>
        )}
        
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          style={inputStyles}
          className={twMerge(
            'flex-1 bg-transparent border-none outline-none placeholder-current',
            leftIcon ? 'pl-2' : 'pl-4',
            rightIcon ? 'pr-2' : 'pr-4',
            'py-3'
          )}
          {...props}
        />
        
        {rightIcon && (
          <button
            type="submit"
            className="flex-shrink-0 pr-4 hover:opacity-70 transition-opacity"
            disabled={disabled}
          >
            <img 
              src={rightIcon} 
              alt="Submit search" 
              className="w-8 h-8"
            />
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchView;
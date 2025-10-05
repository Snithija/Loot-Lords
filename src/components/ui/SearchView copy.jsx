import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const searchViewClasses = cva(
  'flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500',
  {
    variants: {
      variant: {
        primary: 'bg-gray-200',
        secondary: 'bg-white border border-gray-300',
        outline: 'border-2 border-gray-300 bg-transparent',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-3',
        large: 'text-lg px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
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
  leftIcon,
  rightIcon,
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
  const searchStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '20px',
    fontFamily: text_font_family || 'Plus Jakarta Sans',
    fontWeight: text_font_weight || '700',
    lineHeight: text_line_height || '26px',
    textAlign: text_text_align || 'left',
    color: text_color || '#717171',
    backgroundColor: fill_background_color || '#ededed',
    borderRadius: border_border_radius || '20px',
  };

  const handleInputChange = (e) => {
    const newValue = e?.target?.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (onSubmit) {
      onSubmit(searchValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        style={searchStyles}
        className={twMerge(
          searchViewClasses({ variant, size }),
          optionalClasses,
          className
        )}
      >
        {leftIcon && (
          <div className="flex-shrink-0 mr-2">
            {typeof leftIcon === 'string' ? (
              <img src={leftIcon} alt="Search" className="w-5 h-5" />
            ) : (
              leftIcon
            )}
          </div>
        )}
        
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          className="flex-1 bg-transparent outline-none placeholder-current"
          style={{
            fontSize: text_font_size ? `${text_font_size}px` : '20px',
            fontFamily: text_font_family || 'Plus Jakarta Sans',
            fontWeight: text_font_weight || '700',
            color: text_color || '#717171',
          }}
          {...props}
        />
        
        {rightIcon && (
          <div className="flex-shrink-0 ml-2">
            {typeof rightIcon === 'string' ? (
              <img src={rightIcon} alt="Search" className="w-5 h-5" />
            ) : (
              rightIcon
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchView;
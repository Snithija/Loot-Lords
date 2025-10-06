import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const checkboxClasses = cva(
  'flex items-center transition-all duration-200 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'hover:opacity-80',
        secondary: 'hover:bg-gray-50',
        outline: 'border border-gray-300 rounded p-2 hover:border-gray-400',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const CheckBox = ({
  // Required parameters with defaults
  text = "Calvin Klein",
  text_font_size = "16",
  text_font_family = "Plus Jakarta Sans",
  text_font_weight = "400",
  text_line_height = "21px",
  text_text_align = "left",
  text_color = "#000000",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  checked = false,
  onChange,
  disabled = false,
  id,
  name,
  value,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : 'gap-2',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const textStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '16px',
    fontFamily: text_font_family || 'Plus Jakarta Sans',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '21px',
    textAlign: text_text_align || 'left',
    color: text_color || '#000000',
  };

  const handleChange = (e) => {
    const newChecked = e?.target?.checked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(e);
    }
  };

  const checkboxId = id || `checkbox-${Math.random()?.toString(36)?.substr(2, 9)}`;

  return (
    <label
      htmlFor={checkboxId}
      className={twMerge(
        checkboxClasses({ variant, size }),
        optionalClasses,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
        {...props}
      />
      <span style={textStyles} className="ml-2 select-none">
        {text}
      </span>
    </label>
  );
};

export default CheckBox;
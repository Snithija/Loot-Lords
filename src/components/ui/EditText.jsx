import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const editTextClasses = cva(
  'w-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500',
  {
    variants: {
      variant: {
        default: 'border border-gray-300',
        filled: 'border-0',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'text-sm px-3 py-2',
        medium: 'text-base px-4 py-3',
        large: 'text-lg px-4 py-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "123 456 7890",
  text_font_size = "text-base",
  text_font_family = "Plus Jakarta Sans",
  text_font_weight = "font-medium",
  text_line_height = "leading-sm",
  text_text_align = "left",
  text_color = "text-text-light",
  
  // Optional parameters (no defaults)
  fill_background_color,
  border_border,
  border_border_radius,
  layout_width,
  padding,
  position,
  layout_gap,
  
  // Standard React props
  variant,
  size,
  type = "text",
  value,
  onChange,
  className,
  disabled = false,
  required = false,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidBackgroundColor = fill_background_color && typeof fill_background_color === 'string' && fill_background_color?.trim() !== '';
  const hasValidBorder = border_border && typeof border_border === 'string' && border_border?.trim() !== '';
  const hasValidBorderRadius = border_border_radius && typeof border_border_radius === 'string' && border_border_radius?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
    hasValidGap ? `gap-[${layout_gap}]` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required and optional parameters
  const inputStyles = {
    fontSize: text_font_size === "text-base" ? '16px' : text_font_size,
    fontFamily: text_font_family || 'Plus Jakarta Sans',
    fontWeight: text_font_weight === "font-medium" ? '500' : text_font_weight,
    lineHeight: text_line_height === "leading-sm" ? '21px' : text_line_height,
    textAlign: text_text_align || 'left',
    color: text_color === "text-text-light" ? '#9e9e9e' : text_color,
    ...(hasValidBackgroundColor && { backgroundColor: fill_background_color }),
    ...(hasValidBorder && { border: border_border }),
    ...(hasValidBorderRadius && { borderRadius: border_border_radius }),
  };

  const handleInputChange = (e) => {
    const newValue = e?.target?.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleInputChange}
      disabled={disabled}
      required={required}
      style={inputStyles}
      className={twMerge(
        editTextClasses({ variant, size }),
        optionalClasses,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;
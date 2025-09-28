import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const textAreaClasses = cva(
  'w-full resize-vertical transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'focus:ring-blue-500',
        secondary: 'focus:ring-gray-500',
      },
      size: {
        small: 'text-sm px-3 py-2 min-h-[80px]',
        medium: 'text-base px-4 py-3 min-h-[100px]',
        large: 'text-lg px-5 py-4 min-h-[120px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const TextArea = ({
  // Required parameters with defaults
  placeholder = "Message",
  text_font_size = "18",
  text_font_family = "Poppins",
  text_font_weight = "700",
  text_line_height = "27px",
  text_text_align = "left",
  text_color = "#eeeeee7f",
  fill_background_color = "#393e467f",
  border_border_radius = "16px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  rows = 4,
  name,
  id,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const textAreaStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '18px',
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight || '700',
    lineHeight: text_line_height || '27px',
    textAlign: text_text_align || 'left',
    color: text_color || '#eeeeee7f',
    backgroundColor: fill_background_color || '#393e467f',
    borderRadius: border_border_radius || '16px',
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      name={name}
      id={id}
      style={textAreaStyles}
      className={twMerge(
        textAreaClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default TextArea;
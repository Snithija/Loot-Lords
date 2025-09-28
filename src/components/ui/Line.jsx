import React from 'react';
import { twMerge } from 'tailwind-merge';

const Line = ({
  // Required parameters with defaults
  fill_background_color = "#00adb533",
  
  // Optional parameters (no defaults)
  layout_width,
  layout_align_self,
  margin,
  position,
  w_h = "1*18", // width*height format
  
  // Standard React props
  className,
  ...props
}) => {
  // Parse w*h format to determine dimensions and orientation
  const [width, height] = w_h?.split('*')?.map(val => parseInt(val?.trim()));
  const isHorizontal = width > height;
  
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidAlignSelf = layout_align_self && typeof layout_align_self === 'string' && layout_align_self?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidAlignSelf ? `self-${layout_align_self}` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const lineStyles = {
    backgroundColor: fill_background_color || '#00adb533',
    width: hasValidWidth ? undefined : `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      style={lineStyles}
      className={twMerge(
        'block',
        optionalClasses,
        className
      )}
      {...props}
    />
  );
};

export default Line;
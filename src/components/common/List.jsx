import React from 'react';
import { twMerge } from 'tailwind-merge';

const List = ({
  // Required parameters with defaults
  layout_width = "flex-1",
  
  // Optional parameters (no defaults)
  layout_gap,
  layout_justify_content,
  layout_align_items,
  
  // Standard React props
  children,
  className,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidJustifyContent = layout_justify_content && typeof layout_justify_content === 'string' && layout_justify_content?.trim() !== '';
  const hasValidAlignItems = layout_align_items && typeof layout_align_items === 'string' && layout_align_items?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidJustifyContent ? `justify-${layout_justify_content}` : '',
    hasValidAlignItems ? `items-${layout_align_items}` : '',
  ]?.filter(Boolean)?.join(' ');

  // Build width class
  const widthClass = layout_width === 'flex-1' ? 'flex-1' : `w-[${layout_width}]`;

  return (
    <div
      className={twMerge(
        'flex',
        widthClass,
        optionalClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default List;
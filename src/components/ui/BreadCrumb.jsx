import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const breadcrumbClasses = cva(
  'flex items-center text-sm',
  {
    variants: {
      variant: {
        primary: 'text-gray-600',
        secondary: 'text-gray-500',
        outline: 'text-gray-700',
      },
      size: {
        small: 'text-xs',
        medium: 'text-sm',
        large: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const BreadCrumb = ({
  // Optional parameters (no defaults)
  layout_gap,
  layout_justify_content,
  layout_align_items,
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  items = [],
  separator = '/',
  onItemClick,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidJustifyContent = layout_justify_content && typeof layout_justify_content === 'string' && layout_justify_content?.trim() !== '';
  const hasValidAlignItems = layout_align_items && typeof layout_align_items === 'string' && layout_align_items?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Map justify-content values to Tailwind classes
  const getJustifyClass = (value) => {
    const justifyMap = {
      'start': 'justify-start',
      'center': 'justify-center',
      'end': 'justify-end',
      'spaceBetween': 'justify-between',
      'spaceAround': 'justify-around',
      'spaceEvenly': 'justify-evenly',
    };
    return justifyMap?.[value] || 'justify-start';
  };

  // Map align-items values to Tailwind classes
  const getAlignClass = (value) => {
    const alignMap = {
      'start': 'items-start',
      'center': 'items-center',
      'end': 'items-end',
      'stretch': 'items-stretch',
      'baseline': 'items-baseline',
    };
    return alignMap?.[value] || 'items-center';
  };

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : 'gap-2',
    hasValidJustifyContent ? getJustifyClass(layout_justify_content) : '',
    hasValidAlignItems ? getAlignClass(layout_align_items) : '',
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const handleItemClick = (item, index) => {
    if (onItemClick && !item?.disabled) {
      onItemClick(item, index);
    }
  };

  // Default breadcrumb items if none provided
  const defaultItems = [
    { label: 'Home', href: '/', active: false },
    { label: 'Products', href: '/products', active: false },
    { label: 'Current Page', href: '#', active: true },
  ];

  const breadcrumbItems = items?.length > 0 ? items : defaultItems;

  return (
    <nav
      className={twMerge(
        breadcrumbClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-label="Breadcrumb navigation"
      {...props}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems?.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400" aria-hidden="true">
                {separator}
              </span>
            )}
            
            {item?.active ? (
              <span
                className="font-medium text-gray-900 cursor-default"
                aria-current="page"
              >
                {item?.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => handleItemClick(item, index)}
                className={twMerge(
                  'hover:text-gray-900 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 rounded',
                  item?.disabled && 'opacity-50 cursor-not-allowed hover:text-current'
                )}
                disabled={item?.disabled}
                aria-label={`Navigate to ${item?.label}`}
              >
                {item?.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
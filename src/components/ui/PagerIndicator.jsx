import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const pagerClasses = cva(
  'flex items-center justify-center transition-all duration-200',
  {
    variants: {
      variant: {
        dots: 'gap-2',
        numbers: 'gap-1',
        lines: 'gap-1',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'dots',
      size: 'medium',
    },
  }
);

const PagerIndicator = ({
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  totalPages = 5,
  currentPage = 1,
  onPageChange,
  showNumbers = false,
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const handlePageClick = (pageIndex) => {
    if (typeof onPageChange === 'function') {
      onPageChange(pageIndex);
    }
  };

  const renderDots = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const isActive = index + 1 === currentPage;
      
      return (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={twMerge(
            'w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
            isActive 
              ? 'bg-green-600 scale-110' :'bg-gray-300 hover:bg-gray-400'
          )}
          aria-label={`Go to page ${index + 1}`}
          aria-current={isActive ? 'page' : undefined}
        />
      );
    });
  };

  const renderNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const isActive = index + 1 === currentPage;
      
      return (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={twMerge(
            'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
            isActive 
              ? 'bg-green-600 text-white scale-110' :'bg-gray-200 text-gray-700 hover:bg-gray-300'
          )}
          aria-label={`Go to page ${index + 1}`}
          aria-current={isActive ? 'page' : undefined}
        >
          {index + 1}
        </button>
      );
    });
  };

  const renderLines = () => {
    return Array.from({ length: totalPages }, (_, index) => {
      const isActive = index + 1 === currentPage;
      
      return (
        <button
          key={index}
          onClick={() => handlePageClick(index + 1)}
          className={twMerge(
            'h-1 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
            isActive 
              ? 'w-8 bg-green-600' :'w-4 bg-gray-300 hover:bg-gray-400'
          )}
          aria-label={`Go to page ${index + 1}`}
          aria-current={isActive ? 'page' : undefined}
        />
      );
    });
  };

  const getVariantType = () => {
    if (showNumbers) return 'numbers';
    if (variant === 'lines') return 'lines';
    return 'dots';
  };

  const renderIndicators = () => {
    const variantType = getVariantType();
    
    switch (variantType) {
      case 'numbers':
        return renderNumbers();
      case 'lines':
        return renderLines();
      default:
        return renderDots();
    }
  };

  return (
    <div
      className={twMerge(
        pagerClasses({ variant: getVariantType(), size }),
        optionalClasses,
        className
      )}
      role="navigation"
      aria-label="Pagination"
      {...props}
    >
      {renderIndicators()}
    </div>
  );
};

export default PagerIndicator;
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const ratingBarClasses = cva(
  'flex items-center gap-1',
  {
    variants: {
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  }
);

const RatingBar = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  rating = 0,
  maxRating = 5,
  size,
  className,
  onChange,
  readOnly = false,
  showValue = false,
  starColor = '#fbbf24',
  emptyStarColor = '#d1d5db',
  ...props
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const handleStarClick = (starValue) => {
    if (readOnly) return;
    
    setCurrentRating(starValue);
    if (typeof onChange === 'function') {
      onChange(starValue);
    }
  };

  const handleStarHover = (starValue) => {
    if (readOnly) return;
    setHoverRating(starValue);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const renderStar = (starValue) => {
    const isFilled = starValue <= (hoverRating || currentRating);
    
    return (
      <button
        key={starValue}
        type="button"
        onClick={() => handleStarClick(starValue)}
        onMouseEnter={() => handleStarHover(starValue)}
        disabled={readOnly}
        className={twMerge(
          'focus:outline-none transition-colors duration-150',
          !readOnly && 'hover:scale-110 cursor-pointer',
          readOnly && 'cursor-default'
        )}
        aria-label={`Rate ${starValue} out of ${maxRating} stars`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={isFilled ? starColor : emptyStarColor}
          stroke={isFilled ? starColor : emptyStarColor}
          strokeWidth="1"
          className="transition-colors duration-150"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </button>
    );
  };

  return (
    <div
      className={twMerge(
        ratingBarClasses({ size }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => renderStar(index + 1))}
      
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {currentRating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;
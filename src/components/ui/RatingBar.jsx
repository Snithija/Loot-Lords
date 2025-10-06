import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const ratingBarClasses = cva(
  'flex items-center transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'text-yellow-400',
        secondary: 'text-gray-400',
        outline: 'text-yellow-500',
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

const RatingBar = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  rating = 0,
  maxRating = 5,
  onChange,
  readOnly = false,
  showValue = false,
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
    if (onChange) {
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

  const displayRating = hoverRating || currentRating;

  return (
    <div
      className={twMerge(
        ratingBarClasses({ variant, size }),
        optionalClasses,
        readOnly ? 'cursor-default' : 'cursor-pointer',
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {[...Array(maxRating)]?.map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= displayRating;
        
        return (
          <button
            key={index}
            type="button"
            className={twMerge(
              'focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 rounded',
              isFilled ? 'text-yellow-400' : 'text-gray-300',
              !readOnly && 'hover:text-yellow-400 transition-colors duration-150'
            )}
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
            disabled={readOnly}
            aria-label={`Rate ${starValue} star${starValue !== 1 ? 's' : ''}`}
            role="radio"
            aria-checked={starValue === currentRating}
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {currentRating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;
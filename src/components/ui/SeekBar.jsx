import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const seekBarClasses = cva(
  'relative w-full h-2 rounded-full cursor-pointer transition-all duration-200',
  {
    variants: {
      variant: {
        primary: 'bg-gray-200',
        secondary: 'bg-gray-300',
        outline: 'bg-gray-100 border border-gray-300',
      },
      size: {
        small: 'h-1',
        medium: 'h-2',
        large: 'h-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const SeekBar = ({
  // Required parameters with defaults
  fill_background_color = "#5da96a",
  
  // Optional parameters (no defaults)
  layout_width,
  margin,
  position,
  
  // Standard React props
  variant,
  size,
  className,
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  onChangeComplete,
  disabled = false,
  showValue = false,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const seekBarRef = useRef(null);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidMargin = margin && typeof margin === 'string' && margin?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidMargin ? `m-[${margin}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  const percentage = ((currentValue - min) / (max - min)) * 100;

  const updateValue = (clientX) => {
    if (!seekBarRef?.current || disabled) return;

    const rect = seekBarRef?.current?.getBoundingClientRect();
    const newPercentage = Math.max(0, Math.min(100, ((clientX - rect?.left) / rect?.width) * 100));
    let newValue = Math.round(((newPercentage / 100) * (max - min) + min) / step) * step;
    
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e?.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || disabled) return;
    updateValue(e?.clientX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (onChangeComplete) {
      onChangeComplete(currentValue);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, currentValue]);

  const handleKeyDown = (e) => {
    if (disabled) return;
    
    let newValue = currentValue;
    switch (e?.key) {
      case 'ArrowLeft': case'ArrowDown':
        newValue = Math.max(min, currentValue - step);
        break;
      case 'ArrowRight': case'ArrowUp':
        newValue = Math.min(max, currentValue + step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }
    
    e?.preventDefault();
    setCurrentValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={twMerge('flex flex-col', optionalClasses, className)}>
      {showValue && (
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>{min}</span>
          <span className="font-medium">{currentValue}</span>
          <span>{max}</span>
        </div>
      )}
      
      <div
        ref={seekBarRef}
        className={twMerge(
          seekBarClasses({ variant, size }),
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        onMouseDown={handleMouseDown}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Progress fill */}
        <div
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-150"
          style={{
            width: `${percentage}%`,
            backgroundColor: fill_background_color || '#5da96a',
          }}
        />
        
        {/* Thumb */}
        <div
          className={twMerge(
            'absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-150',
            isDragging ? 'scale-110' : 'scale-100',
            disabled ? 'cursor-not-allowed' : 'cursor-grab hover:scale-105'
          )}
          style={{
            left: `${percentage}%`,
            transform: `translateX(-50%) translateY(-50%)`,
            backgroundColor: fill_background_color || '#5da96a',
          }}
        />
      </div>
    </div>
  );
};

export default SeekBar;
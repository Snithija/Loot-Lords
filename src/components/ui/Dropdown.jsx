import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const dropdownClasses = cva(
  'relative inline-block text-left transition-all duration-200',
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

const Dropdown = ({
  // Optional parameters (no defaults)
  layout_gap,
  layout_width,
  padding,
  position,
  
  // Standard React props
  size,
  className,
  options = [],
  placeholder = "Select option",
  value,
  onChange,
  disabled = false,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef(null);

  // Safe validation for optional parameters
  const hasValidGap = layout_gap && typeof layout_gap === 'string' && layout_gap?.trim() !== '';
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidGap ? `gap-[${layout_gap}]` : '',
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef?.current && !dropdownRef?.current?.contains(event?.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option?.value || option);
    setIsOpen(false);
    if (typeof onChange === 'function') {
      onChange(option);
    }
  };

  const selectedOption = options?.find(opt => (opt?.value || opt) === selectedValue);
  const displayValue = selectedOption ? (selectedOption?.label || selectedOption) : placeholder;

  return (
    <div
      ref={dropdownRef}
      className={twMerge(
        dropdownClasses({ size }),
        optionalClasses,
        className
      )}
      {...props}
    >
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={twMerge(
          'flex items-center justify-between w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent',
          disabled && 'opacity-50 cursor-not-allowed',
          isOpen && 'ring-2 ring-green-500 border-transparent'
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="block truncate">{displayValue}</span>
        <svg
          className={twMerge(
            'w-5 h-5 ml-2 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1" role="listbox">
            {options?.length > 0 ? (
              options?.map((option, index) => {
                const optionValue = option?.value || option;
                const optionLabel = option?.label || option;
                const isSelected = optionValue === selectedValue;

                return (
                  <li key={index} role="option" aria-selected={isSelected}>
                    <button
                      type="button"
                      onClick={() => handleOptionSelect(option)}
                      className={twMerge(
                        'w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100',
                        isSelected && 'bg-green-50 text-green-600 font-medium'
                      )}
                    >
                      {optionLabel}
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-2 text-gray-500">No options available</li>
            )}
          </ul>
        </div>
      )}
      {/* Custom children content */}
      {children}
    </div>
  );
};

export default Dropdown;
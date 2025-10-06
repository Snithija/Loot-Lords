import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const phoneInputClasses = cva(
  'flex items-center transition-all duration-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500',
  {
    variants: {
      variant: {
        default: 'border',
        filled: 'border-0',
        outline: 'border-2 bg-transparent',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium',
    },
  }
);

const PhoneNumberInput = ({
  // Required parameters with defaults
  fill_background_color = "bg-input-background",
  border_border = "1 solid border-input-border",
  border_border_radius = "rounded-sm",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  value,
  onChange,
  placeholder = "Enter phone number",
  disabled = false,
  className,
  countryCode = "+1",
  onCountryChange,
  ...props
}) => {
  const [phoneValue, setPhoneValue] = useState(value || '');
  const [selectedCountry, setSelectedCountry] = useState(countryCode);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : 'w-full',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const containerStyles = {
    backgroundColor: fill_background_color === "bg-input-background" ? '#ffffff' : fill_background_color,
    border: border_border === "1 solid border-input-border" ? '1px solid #b4b4b4' : border_border,
    borderRadius: border_border_radius === "rounded-sm" ? '8px' : border_border_radius,
  };

  const handlePhoneChange = (e) => {
    const newValue = e?.target?.value;
    setPhoneValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const handleCountryChange = (e) => {
    const newCountry = e?.target?.value;
    setSelectedCountry(newCountry);
    if (onCountryChange) {
      onCountryChange(newCountry);
    }
  };

  // Common country codes
  const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+39', country: 'IT', flag: '🇮🇹' },
    { code: '+34', country: 'ES', flag: '🇪🇸' },
    { code: '+7', country: 'RU', flag: '🇷🇺' },
  ];

  return (
    <div
      style={containerStyles}
      className={twMerge(
        phoneInputClasses({ variant, size }),
        optionalClasses,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {/* Country Code Selector */}
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        disabled={disabled}
        className="bg-transparent border-0 outline-none px-3 py-2 text-gray-700 cursor-pointer"
        style={{ minWidth: '80px' }}
      >
        {countryCodes?.map((country) => (
          <option key={country?.code} value={country?.code}>
            {country?.flag} {country?.code}
          </option>
        ))}
      </select>
      {/* Separator */}
      <div className="w-px h-6 bg-gray-300 mx-2"></div>
      {/* Phone Number Input */}
      <input
        type="tel"
        placeholder={placeholder}
        value={phoneValue}
        onChange={handlePhoneChange}
        disabled={disabled}
        className="flex-1 bg-transparent border-0 outline-none px-2 py-2 text-gray-900 placeholder-gray-500"
        {...props}
      />
    </div>
  );
};

export default PhoneNumberInput;
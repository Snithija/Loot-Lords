import React, { useState } from 'react';
import CheckBox from '../../components/ui/CheckBox';
import EditText from '../../components/ui/EditText';
import SeekBar from '../../components/ui/SeekBar';

const FilterSidebar = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 330 });
  const [selectedBrands, setSelectedBrands] = useState(['levis']);
  const [selectedColors, setSelectedColors] = useState(['black']);
  const [selectedSizes, setSelectedSizes] = useState([]);

  // 👇 Collapsible section states
  const [openSections, setOpenSections] = useState({
    sortBy: true,
    price: true,
    brands: true,
    color: true,
    size: true,
  });

  // Toggle function for each section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleSortChange = (value) => setSortBy(value);

  const handleBrandChange = (brand, checked) => {
    setSelectedBrands((prev) =>
      checked ? [...prev, brand] : prev.filter((b) => b !== brand)
    );
  };

  const handleColorChange = (color, checked) => {
    setSelectedColors((prev) =>
      checked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };

  const handleSizeChange = (size, checked) => {
    setSelectedSizes((prev) =>
      checked ? [...prev, size] : prev.filter((s) => s !== size)
    );
  };

  return (
    <aside className="w-full lg:w-[280px] bg-white border border-[#d9d9d9] rounded-lg p-4 lg:p-5 h-fit">
      {/* Sort By Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => toggleSection('sortBy')}
        >
          <h3 className="text-lg font-medium text-[#000000]">Sort By</h3>
          <img
            src={
              openSections.sortBy
                ? '/images/Chevron Up Icon.png'
                : '/images/img_arrow_down.svg'
            }
            alt="Toggle"
            className="w-5 h-5 transition-transform duration-300"
          />
        </div>

        {openSections.sortBy && (
          <div className="space-y-3">
            {['newest', 'priceLowToHigh', 'priceHighToLow', 'topRated'].map(
              (value) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sortBy"
                    value={value}
                    checked={sortBy === value}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="w-4 h-4 text-[#5da96a] border-gray-300 focus:ring-[#5da96a]"
                  />
                  <span className="text-lg text-[#000000] capitalize">
                    {value === 'priceLowToHigh'
                      ? 'Price Low to High'
                      : value === 'priceHighToLow'
                      ? 'Price High to Low'
                      : value === 'topRated'
                      ? 'Top Rated'
                      : 'Newest'}
                  </span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>

      {/* Price Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h3 className="text-lg font-medium text-[#000000]">Price</h3>
          <img
            src={
              openSections.price
                ? '/images/Chevron Up Icon.png'
                : '/images/img_arrow_down.svg'
            }
            alt="Toggle"
            className="w-5 h-5"
          />
        </div>

        {openSections.price && (
          <>
            <div className="flex gap-3 mb-5">
              <EditText
                placeholder="0"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: e.target.value })
                }
                className="flex-1"
              />
              <EditText
                placeholder="330"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: e.target.value })
                }
                className="flex-1"
              />
            </div>

            <SeekBar
              value={priceRange.max}
              min={0}
              max={330}
              onChange={(value) => setPriceRange({ ...priceRange, max: value })}
              className="mt-5"
            />
          </>
        )}
      </div>

      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>

      {/* Brands Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => toggleSection('brands')}
        >
          <h3 className="text-lg font-medium text-[#000000]">Brands</h3>
          <img
            src={
              openSections.brands
                ? '/images/Chevron Up Icon.png'
                : '/images/img_arrow_down.svg'
            }
            alt="Toggle"
            className="w-5 h-5"
          />
        </div>

        {openSections.brands && (
          <div className="space-y-3">
            {['levis', 'tommy', 'calvin1', 'uniqlo', 'nike', 'adidas'].map(
              (brand) => (
                <CheckBox
                  key={brand}
                  text={brand.charAt(0).toUpperCase() + brand.slice(1)}
                  checked={selectedBrands.includes(brand)}
                  onChange={(e) => handleBrandChange(brand, e.target.checked)}
                />
              )
            )}
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>

      {/* Color Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => toggleSection('color')}
        >
          <h3 className="text-lg font-medium text-[#000000]">Color</h3>
          <img
            src={
              openSections.color
                ? '/images/Chevron Up Icon.png'
                : '/images/img_arrow_down.svg'
            }
            alt="Toggle"
            className="w-5 h-5"
          />
        </div>

        {openSections.color && (
          <div className="space-y-3">
            {['black', 'white', 'green', 'blue', 'orange'].map((color) => (
              <CheckBox
                key={color}
                text={color.charAt(0).toUpperCase() + color.slice(1)}
                checked={selectedColors.includes(color)}
                onChange={(e) => handleColorChange(color, e.target.checked)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>

      {/* Size Section */}
      <div>
        <div
          className="flex justify-between items-center mb-4 cursor-pointer"
          onClick={() => toggleSection('size')}
        >
          <h3 className="text-lg font-medium text-[#000000]">Size</h3>
          <img
            src={
              openSections.size
                ? '/images/Chevron Up Icon.png'
                : '/images/img_arrow_down.svg'
            }
            alt="Toggle"
            className="w-5 h-5"
          />
        </div>

        {openSections.size && (
          <div className="space-y-3">
            {['s', 'm', 'l', 'xl', 'xxl'].map((size) => (
              <CheckBox
                key={size}
                text={size.toUpperCase()}
                checked={selectedSizes.includes(size)}
                onChange={(e) => handleSizeChange(size, e.target.checked)}
              />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;

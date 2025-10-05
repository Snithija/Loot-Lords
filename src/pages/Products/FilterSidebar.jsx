import React, { useState } from 'react';
import CheckBox from '../../components/ui/checkBox';
// ...existing code...
import EditText from '../../components/ui/EditText';
import SeekBar from '../../components/ui/SeekBar';

const FilterSidebar = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 330 });
  const [selectedBrands, setSelectedBrands] = useState(['levis']);
  const [selectedColors, setSelectedColors] = useState(['black']);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  const handleBrandChange = (brand, checked) => {
    if (checked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands?.filter(b => b !== brand));
    }
  };

  const handleColorChange = (color, checked) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors?.filter(c => c !== color));
    }
  };

  const handleSizeChange = (size, checked) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes?.filter(s => s !== size));
    }
  };

  return (
    <aside className="w-full lg:w-[280px] bg-white border border-[#d9d9d9] rounded-lg p-4 lg:p-5 h-fit">
      {/* Sort By Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-[#000000]">Sort By</h3>
          <img src="/images/img_arrow_up.svg" alt="Toggle" className="w-5 h-5" />
        </div>
        
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="newest"
              checked={sortBy === 'newest'}
              onChange={(e) => handleSortChange(e?.target?.value)}
              className="w-4 h-4 text-[#5da96a] border-gray-300 focus:ring-[#5da96a]"
            />
            <span className="text-lg text-[#000000]">Newest</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="priceLowToHigh"
              checked={sortBy === 'priceLowToHigh'}
              onChange={(e) => handleSortChange(e?.target?.value)}
              className="w-4 h-4 text-[#5da96a] border-gray-300 focus:ring-[#5da96a]"
            />
            <span className="text-lg text-[#000000]">Price Low to High</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="priceHighToLow"
              checked={sortBy === 'priceHighToLow'}
              onChange={(e) => handleSortChange(e?.target?.value)}
              className="w-4 h-4 text-[#5da96a] border-gray-300 focus:ring-[#5da96a]"
            />
            <span className="text-lg text-[#000000]">Price High to Low</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="sortBy"
              value="topRated"
              checked={sortBy === 'topRated'}
              onChange={(e) => handleSortChange(e?.target?.value)}
              className="w-4 h-4 text-[#5da96a] border-gray-300 focus:ring-[#5da96a]"
            />
            <span className="text-lg text-[#000000]">Top Rated</span>
          </label>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>
      {/* Price Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-medium text-[#000000]">Price</h3>
          <img src="/images/img_arrow_up.svg" alt="Toggle" className="w-5 h-5" />
        </div>
        
        <div className="flex gap-3 mb-5">
          <EditText
            placeholder="0"
            value={priceRange?.min}
            onChange={(e) => setPriceRange({...priceRange, min: e?.target?.value})}
            className="flex-1"
          />
          <EditText
            placeholder="330"
            value={priceRange?.max}
            onChange={(e) => setPriceRange({...priceRange, max: e?.target?.value})}
            className="flex-1"
          />
        </div>
        
        <SeekBar
          value={priceRange?.max}
          min={0}
          max={330}
          onChange={(value) => setPriceRange({...priceRange, max: value})}
          className="mt-5"
        />
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>
      {/* Brands Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-[#000000]">Brands</h3>
          <img src="/images/img_arrow_up.svg" alt="Toggle" className="w-5 h-5" />
        </div>
        
        <div className="space-y-3">
          <CheckBox
            text="Levi's"
            checked={selectedBrands?.includes('levis')}
            onChange={(e) => handleBrandChange('levis', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="levis"
            name="levis"
            value="levis"
          />
          <CheckBox
            text="Tommy Hillfinger"
            checked={selectedBrands?.includes('tommy')}
            onChange={(e) => handleBrandChange('tommy', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="tommy"
            name="tommy"
            value="tommy"
          />
          <CheckBox
            text="Calvin Klein"
            checked={selectedBrands?.includes('calvin1')}
            onChange={(e) => handleBrandChange('calvin1', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="calvin1"
            name="calvin1"
            value="calvin1"
          />
          <CheckBox
            text="Calvin Klein"
            checked={selectedBrands?.includes('calvin2')}
            onChange={(e) => handleBrandChange('calvin2', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="calvin2"
            name="calvin2"
            value="calvin2"
          />
          
          {/* Custom checkboxes for Lacoste and Zara */}
          <label className="flex items-center gap-2 cursor-pointer py-1">
            <div className="w-5 h-5 border border-[#8e8e93] rounded bg-white"></div>
            <span className="text-lg text-[#000000]">Lacoste</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer py-1">
            <div className="w-5 h-5 border border-[#8e8e93] rounded bg-white"></div>
            <span className="text-lg text-[#000000]">Zara</span>
          </label>
          
          <CheckBox
            text="Uniqlo"
            checked={selectedBrands?.includes('uniqlo')}
            onChange={(e) => handleBrandChange('uniqlo', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="uniqlo"
            name="uniqlo"
            value="uniqlo"
          />
          <CheckBox
            text="Nike"
            checked={selectedBrands?.includes('nike')}
            onChange={(e) => handleBrandChange('nike', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="nike"
            name="nike"
            value="nike"
          />
          <CheckBox
            text="Adidas"
            checked={selectedBrands?.includes('adidas')}
            onChange={(e) => handleBrandChange('adidas', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="adidas"
            name="adidas"
            value="adidas"
          />
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>
      {/* Color Section */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-[#000000]">Color</h3>
          <img src="/images/img_arrow_up.svg" alt="Toggle" className="w-5 h-5" />
        </div>
        
        <div className="space-y-3">
          <CheckBox
            text="Black"
            checked={selectedColors?.includes('black')}
            onChange={(e) => handleColorChange('black', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="black"
            name="black"
            value="black"
          />
          <CheckBox
            text="White"
            checked={selectedColors?.includes('white')}
            onChange={(e) => handleColorChange('white', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="white"
            name="white"
            value="white"
          />
          <CheckBox
            text="Green"
            checked={selectedColors?.includes('green')}
            onChange={(e) => handleColorChange('green', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="green"
            name="green"
            value="green"
          />
          <CheckBox
            text="Blue"
            checked={selectedColors?.includes('blue')}
            onChange={(e) => handleColorChange('blue', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="blue"
            name="blue"
            value="blue"
          />
          <CheckBox
            text="Orange"
            checked={selectedColors?.includes('orange')}
            onChange={(e) => handleColorChange('orange', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="orange"
            name="orange"
            value="orange"
          />
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-[1px] bg-[#d9d9d9] mb-6"></div>
      {/* Size Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-[#000000]">Size</h3>
          <img src="/images/img_arrow_up.svg" alt="Toggle" className="w-5 h-5" />
        </div>
        
        <div className="space-y-3">
          {/* Custom checkbox for S */}
          <label className="flex items-center gap-2 cursor-pointer py-1">
            <div className="w-5 h-5 border border-[#8e8e93] rounded bg-white"></div>
            <span className="text-lg text-[#000000]">S</span>
          </label>
          
          <CheckBox
            text="M"
            checked={selectedSizes?.includes('m')}
            onChange={(e) => handleSizeChange('m', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="m"
            name="m"
            value="m"
          />
          
          {/* Custom checkbox for L */}
          <label className="flex items-center gap-2 cursor-pointer py-1">
            <div className="w-5 h-5 border border-[#8e8e93] rounded bg-white"></div>
            <span className="text-lg text-[#000000]">L</span>
          </label>
          
          <CheckBox
            text="XL"
            checked={selectedSizes?.includes('xl')}
            onChange={(e) => handleSizeChange('xl', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="xl"
            name="xl"
            value="xl"
          />
          <CheckBox
            text="XXL"
            checked={selectedSizes?.includes('xxl')}
            onChange={(e) => handleSizeChange('xxl', e?.target?.checked)}
            layout_gap=""
            layout_width=""
            padding=""
            position=""
            variant=""
            size=""
            className=""
            id="xxl"
            name="xxl"
            value="xxl"
          />
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
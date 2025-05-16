/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { availability, brands, colors, fashionCategories, ratings, sizes } from "./constant";
import { useDispatch } from "react-redux";
import { setFilter } from "@/Redux/Features/ProductSlice/FilterSlice";

const FilterSidebar = () => {
  const [price, setPrice] = useState(250);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // Fashion-specific data
  const dispatch=useDispatch()
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectCategory,setCategory]=useState<string[]>([])
  const handleCheckedChange=(checked: string | boolean,brand:string)=>{
   const updated=checked?
   [...selectedBrands,brand]:selectedBrands.filter((item)=>item!==brand);
   setSelectedBrands(updated)
   dispatch(setFilter(updated))

  }

  console.log(selectCategory);
  const handleCheckedCategory = (checked: string | boolean, category:string) => {
   const updated = checked
    ? [...selectCategory, category]
    : selectCategory.filter((item) => item !== category);
  setCategory(updated); // local update
  dispatch(setFilter(updated))
   
  }
  return (
    <Card 
      className="rounded-xl shadow-sm"
      style={{
        backgroundColor: '#F5F7FA', // secondary
        borderColor: '#4A90E220' // primary with 20% opacity
      }}
    >
      <CardContent className="space-y-8">
        {/* Price Filter */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Price Range</h2>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
              style={{
                borderColor: '#4A90E240',
                backgroundColor: '#FFFFFF',
                color: '#2D2D2D',
                
              }}
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border-2 focus:ring-2 focus:ring-offset-2 transition-all"
              style={{
                borderColor: '#4A90E240',
                backgroundColor: '#FFFFFF',
                color: '#2D2D2D',
               
              }}
            />
          </div>
          <Slider
            defaultValue={[price]}
            max={1000}
            step={50}
            onValueChange={(val) => setPrice(val[0])}
            className=""
            style={{
              '--primary': '#4A90E2',
              '--secondary': '#FFD166'
            } as React.CSSProperties}
          />
          <p className="text-sm font-medium" style={{ color: '#4A90E2' }}>${price}</p>
        </div>

        {/* Categories */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Categories</h2>
          <ul className="space-y-3">
            {fashionCategories.map((category, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <Checkbox 
                  checked={selectCategory.includes(category)}
                  onCheckedChange={(checked) => handleCheckedCategory(checked, category)}
                  className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  style={{ borderColor: '#4A90E240' }}
                />
                <span 
                  className="text-sm font-semibold group-hover:text-primary transition-colors"
                  style={{ color: '#2D2D2D' }}
                >
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Sizes</h2>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size, index) => (
              <Button 
                key={index}
                variant="outline"
                className="rounded-md hover:bg-primary/10"
                style={{
                  borderColor: '#4A90E240',
                  color: '#2D2D2D'
                }}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Colors</h2>
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full border-2 cursor-pointer hover:scale-110 transition-transform"
                style={{
                  backgroundColor: color.code,
                  borderColor: color.name === 'White' ? '#CBD5E1' : 'transparent'
                }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Brands</h2>
          <ul className="space-y-3">
            {brands.map((brand, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <Checkbox
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => handleCheckedChange(checked, brand)}
                  className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  style={{ borderColor: '#4A90E240' }}
                />
                <span 
                  className="text-sm group-hover:text-primary transition-colors"
                  style={{ color: '#2D2D2D' }}
                >
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rating */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Rating</h2>
          <ul className="space-y-3">
            {ratings.map((rating, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <Checkbox 
                  className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  style={{ borderColor: '#4A90E240' }}
                />
                <span className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < rating ? 'text-accent' : 'text-gray-300'}`}
                      style={{ color: i < rating ? '#FFD166' : '#CBD5E1' }}
                    >
                      ★
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Availability */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold" style={{ color: '#2D2D2D' }}>Availability</h2>
          <ul className="space-y-3">
            {availability.map((status, index) => (
              <li key={index} className="flex items-center gap-3 group">
                <Checkbox 
                  className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  style={{ borderColor: '#4A90E240' }}
                />
                <span 
                  className="text-sm group-hover:text-primary transition-colors"
                  style={{ color: '#2D2D2D' }}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;
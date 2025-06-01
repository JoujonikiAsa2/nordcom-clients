"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

export default function FilterSidebar() {
  const [expandedSections, setExpandedSections] = useState({
    primaryCategories: true,
    categories: true,
    price: true,
    brand: true,
    storage: true,
    condition: true,
    rating: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof expandedSections],
    }));
  };

  const FilterSection = ({
    title,
    sectionKey,
    children,
    showClear = false,
  }: {
    title: string;
    sectionKey: string;
    children: React.ReactNode;
    showClear?: boolean;
  }) => (
    <div className="border-b border-gray-200 py-4 ">
      <div className="flex items-center justify-between mb-3">
        <h3 className=" text-gray-900 text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          {showClear && (
            <button className="text-orange-500 text-sm hover:text-orange-600">
              Clear Filter
            </button>
          )}
          <button
            onClick={() => toggleSection(sectionKey)}
            className="text-gray-400 hover:text-gray-600"
          >
            {expandedSections[sectionKey as keyof typeof expandedSections] ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>
        </div>
      </div>
      {expandedSections[sectionKey as keyof typeof expandedSections] &&
        children}
    </div>
  );

  const CheckboxItem = ({
    label,
    count,
  }: {
    label: string;
    count?: number;
  }) => (
    <label className="flex items-center justify-between py-1 cursor-pointer hover:bg-gray-50 px-2 rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-orange-500 mr-2"
        />
        <span className="text-sm text-gray-700">{label}</span>
      </div>
      {count && <span className="text-xs text-gray-400">({count})</span>}
    </label>
  );

  const ColorSwatch = ({
    color,
    selected = false,
  }: {
    color: string;
    selected?: boolean;
  }) => (
    <button
      className={`w-6 h-6 rounded border-2 ${
        selected ? "border-gray-400" : "border-gray-200"
      } hover:border-gray-400`}
      style={{ backgroundColor: color }}
    />
  );

  const StarRating = ({ rating, count }: { rating: number; count: number }) => (
    <label className="flex items-center justify-between py-1 cursor-pointer hover:bg-gray-50 px-2 rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="rounded border-gray-300 text-orange-500 mr-2"
        />
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>
      <span className="text-xs text-gray-400">({count})</span>
    </label>
  );

  return (
    <div className="max-w-lg bg-white  lg:border-r border-gray-200 ">
      <div className="p-4 ">
        {/* Primary Categories */}
        <FilterSection
          title="Primary Categories"
          sectionKey="primaryCategories"
        >
          <div className="space-y-1">
            <CheckboxItem label="Jewelry phones" count={125} />
            <CheckboxItem label="Smartphone" count={89} />
            <CheckboxItem label="Watch" count={45} />
            <CheckboxItem label="Bag" count={67} />
          </div>
        </FilterSection>

        {/* Categories */}
        <FilterSection
          title="Categories"
          sectionKey="categories"
          showClear={true}
        >
          <div className="space-y-1">
            <CheckboxItem label="Jewelry phones" count={34} />
            <CheckboxItem label="Jewelry phones" count={28} />
            <CheckboxItem label="Jewelry phones" count={19} />
            <CheckboxItem label="Jewelry phones" count={42} />
            <CheckboxItem label="Jewelry phones" count={15} />
          </div>
        </FilterSection>

        {/* Categories with Price Range */}
        <FilterSection title="Price" sectionKey="pariceRange">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">$0</span>
              <span className="text-sm text-gray-600">$10000</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="10000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </FilterSection>

        {/* Brand */}
        <FilterSection title="Brand" sectionKey="brand">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search Brand..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            <CheckboxItem label="Apple" count={156} />
            <CheckboxItem label="Samsung" count={234} />
            <CheckboxItem label="Google" count={89} />
            <CheckboxItem label="OnePlus" count={67} />
            <CheckboxItem label="Xiaomi" count={123} />
            <CheckboxItem label="Huawei" count={78} />
          </div>
        </FilterSection>

        {/* Brand with Colors */}
        <FilterSection title="Brand" sectionKey="brandColors">
          <div className="grid grid-cols-6 gap-2">
            <ColorSwatch color="#ff6b6b" />
            <ColorSwatch color="#4ecdc4" />
            <ColorSwatch color="#45b7d1" />
            <ColorSwatch color="#96ceb4" />
            <ColorSwatch color="#feca57" />
            <ColorSwatch color="#ff9ff3" />
            <ColorSwatch color="#a55eea" selected={true} />
            <ColorSwatch color="#26de81" />
            <ColorSwatch color="#fd79a8" />
            <ColorSwatch color="#fdcb6e" />
            <ColorSwatch color="#6c5ce7" />
            <ColorSwatch color="#74b9ff" />
            <ColorSwatch color="#00b894" />
            <ColorSwatch color="#e17055" />
            <ColorSwatch color="#636e72" />
            <ColorSwatch color="#2d3436" />
            <ColorSwatch color="#ddd" />
            <ColorSwatch color="#fff" />
          </div>
        </FilterSection>

        {/* Storage */}
        <FilterSection title="Storage" sectionKey="storage">
          <div className="space-y-1">
            <CheckboxItem label="32GB" count={45} />
            <CheckboxItem label="64GB" count={78} />
            <CheckboxItem label="128GB" count={156} />
            <CheckboxItem label="256GB" count={89} />
          </div>
        </FilterSection>

        {/* Condition */}
        <FilterSection title="Condition" sectionKey="condition">
          <div className="space-y-1">
            <CheckboxItem label="New" count={234} />
            <CheckboxItem label="Used - Like New" count={123} />
            <CheckboxItem label="Used - Good" count={89} />
            <CheckboxItem label="Used - Fair" count={45} />
          </div>
          <button className="text-orange-500 text-sm mt-2 hover:text-orange-600">
            Show More
          </button>
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Rating" sectionKey="rating">
          <div className="space-y-1">
            <StarRating rating={5} count={234} />
            <StarRating rating={4} count={156} />
            <StarRating rating={3} count={89} />
            <StarRating rating={2} count={45} />
            <StarRating rating={1} count={12} />
          </div>
        </FilterSection>
      </div>
    </div>
  );
}

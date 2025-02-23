'use client';
import React from 'react';
import HambergerIcon from '@/assets/svg/hamberger';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { X } from 'lucide-react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const categories = [
    { icon: '🎮', name: 'Gaming', subcategories: ['Console', 'PC Games', 'Accessories'] },
    { icon: '📱', name: 'iPhone', subcategories: ['Smartphones', 'Tablets', 'Accessories'] },
    { icon: '💻', name: 'Laptop', subcategories: ['Gaming', 'Business', 'Student'] },
    { icon: '📷', name: 'Camera', subcategories: ['DSLR', 'Mirrorless', 'Lenses'] },
    { icon: '🖥️', name: 'Desktop', subcategories: ['Gaming PC', 'Workstation', 'All-in-One'] },
    { icon: '🎧', name: 'Audio', subcategories: ['Headphones', 'Speakers', 'Microphones'] },
  ];

  // Only show first 6 categories in main nav
  const visibleCategories = categories.slice(0, 6);

  return (
    <nav className="">
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center py-2 gap-4">
          <Button 
            variant="default"
            className="flex-wrap items-center gap-2 bg-orange-400 hover:bg-[#101940] text-white"
            onClick={() => setIsDrawerOpen(true)}
          >
            <HambergerIcon />
            <span>All Categories</span>
          </Button>

          <div className="hidden md:flex flex-wrap gap-2 md:gap-4">
            {visibleCategories.map((category) => (
              <Button
                key={category.name}
                variant="ghost"
                className="flex items-center justify-center text-gray-800 hover:bg-gray-100 px-4 py-2"
              >
                <span className="text-xl mr-2">{category.icon}</span>
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Drawer */}
      {isDrawerOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
            onClick={() => setIsDrawerOpen(false)}
          />
          
          {/* Drawer */}
          <div className={`fixed top-0 left-0 h-screen w-full md:w-1/4 bg-white z-50 overflow-y-auto
                          transform transition-transform duration-500 ease-in-out
                          ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">All Categories</h2>
                <Button
                  variant="ghost"
                  onClick={() => setIsDrawerOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-full"
                >
                  <X size={24} />
                </Button>
              </div>

              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <ul className="ml-8 space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub}>
                          <button className="text-gray-600 hover:text-orange-400 transition-colors">
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

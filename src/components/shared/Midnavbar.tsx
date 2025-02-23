'use client';
import NordcomLogo from '@/assets/svg/nordcomlogo';
import { HeartIcon, LogInIcon, Search, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Midnavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='py-4 px-4 border-b '>
            <div className=''>
                {/* Desktop & Tablet Layout */}
                <div className='hidden md:flex justify-between items-center gap-4'>
                    <Link href="/" className='flex-shrink-0'>
                        <NordcomLogo className="h-12 w-auto" />
                    </Link>

                    <div className='flex-1 max-w-2xl relative'>
                        <input
                            type='search'
                            placeholder='Search products...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full py-2 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                        <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                            <Search size={20} />
                        </button>
                    </div>

                    <div className='flex items-center gap-6'>
                        <Link href="/login" className='flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors'>
                            <LogInIcon size={24} />
                            <span className='text-xs mt-1'>Login</span>
                        </Link>
                        
                        <Link href="/wishlist" className='flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors relative'>
                            <HeartIcon size={24} />
                            <span className='text-xs mt-1'>Wishlist</span>
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                        </Link>
                        
                        <Link href="/cart" className='flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors relative'>
                            <ShoppingCartIcon size={24} />
                            <span className='text-xs mt-1'>Cart</span>
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className='md:hidden space-y-4'>
                    <div className='flex justify-between items-center'>
                        <Link href="/" className='flex-shrink-0'>
                            <NordcomLogo className="h-8 w-auto" />
                        </Link>

                        <div className='flex items-center gap-3'>
                            <button 
                                onClick={() => setShowSearch(!showSearch)}
                                className='p-2 text-gray-600 hover:text-blue-600'
                            >
                                <Search size={24} />
                            </button>
                            
                            <Link href="/login" className='p-2 text-gray-600 hover:text-blue-600'>
                                <LogInIcon size={24} />
                            </Link>
                            
                            <Link href="/wishlist" className='p-2 text-gray-600 hover:text-blue-600 relative'>
                                <HeartIcon size={24} />
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                            </Link>
                            
                            <Link href="/cart" className='p-2 text-gray-600 hover:text-blue-600 relative'>
                                <ShoppingCartIcon size={24} />
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    {showSearch && (
                        <div className='relative'>
                            <input
                                type='search'
                                placeholder='Search products...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full py-2 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                            <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                                <Search size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Midnavbar;
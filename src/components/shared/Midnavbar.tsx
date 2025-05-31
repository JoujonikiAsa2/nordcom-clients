'use client';
import NordcomLogo from '@/assets/svg/nordcomlogo';
import { useAppSelector } from '@/redux/store/hooks';
import { HeartIcon, LogInIcon, Search, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LoginModal from '../auth/loginFormModal';

const Midnavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    // Get cart items count from Redux store
    const cartItems = useAppSelector((state) => state.cart.items);
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Handle sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
      <div className={`py-4 px-4 border-b bg-white transition-all duration-300 z-50 
            ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md' : ''}`}>
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
                            className='w-full py-2 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#101940]'
                        />
                        <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'>
                            <Search size={20} />
                        </button>
                    </div>

                    <div className='flex items-center gap-6'>
                        <button  onClick={() => setShowLogin(true)} className='flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors'>
                            <LogInIcon size={24} />
                            <span className='text-xs mt-1'>Login</span>
                        </button>
                        
                        <Link href="/wishlist" className='flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors relative'>
                            <HeartIcon size={24} />
                            <span className='text-xs mt-1'>Wishlist</span>
                            <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                        </Link>
                        
                          <Link href="/cart" className='flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors relative'>
                            <ShoppingCartIcon size={24} />
                            <span className='text-xs mt-1'>Cart</span>
                            {cartItemsCount > 0 && (
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                    {cartItemsCount}
                                </span>
                            )}
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
                                className='p-2 text-gray-600 hover:text-[#101940]'
                            >
                                <Search size={24} />
                            </button>
                            
                            <Link href="/login" className='p-2 text-gray-600 hover:text-[#101940]'>
                                <LogInIcon size={24} />
                            </Link>
                            
                            <Link href="/wishlist" className='p-2 text-gray-600 hover:text-[#101940] relative'>
                                <HeartIcon size={24} />
                                <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>0</span>
                            </Link>
                            
                            <Link href="/cart" className='p-2 text-gray-600 hover:text-[#101940] relative'>
                                <ShoppingCartIcon size={24} />
                                {cartItemsCount > 0 && (
                                    <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                                        {cartItemsCount}
                                    </span>
                                )}
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

             <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </div>
    );
};

export default Midnavbar;
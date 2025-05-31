'use client';
import NordcomLogo from '@/assets/svg/nordcomlogo';
import { useAppSelector } from '@/redux/store/hooks';
import { HeartIcon, LogInIcon, Search, ShoppingCartIcon, User } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import LoginModal from '../auth/loginFormModal';
import { useRouter } from 'next/navigation';
import deleteTokenFromCookie from '@/helpers/deleteToken';

const Midnavbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [userName, setUserName] = useState('');
    
    const cartItems = useAppSelector((state) => state.cart.items);
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const router = useRouter();

    // Memoized handler for scroll events
    const handleScroll = useCallback(() => {
        setIsSticky(window.scrollY > 0);
    }, []);

    useEffect(() => {
        // Get userName from sessionStorage
        setUserName(sessionStorage.getItem("userName") || '');
        
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleLogout = useCallback(async() => {
        sessionStorage.clear();
        await deleteTokenFromCookie()
        setUserName('');
        router.push('/');
    }, [router]);

    // Navbar user profile dropdown
    const UserProfile = () => (
        <div className="relative group flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors cursor-pointer">
            <div className="flex flex-col items-center">
                <User className="w-8 h-8 rounded-full text-gray-400 bg-gray-200 p-1" />
                <p className="font-semibold text-sm">{userName}</p>
            </div>
            <div className="absolute top-8 right-0 w-32 bg-white border rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                    Logout
                </button>
                <button
                    onClick={() => router.push('/dashboard/orders')}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                    Dashboard
                </button>
            </div>
        </div>
    );

    // Navbar icon button component
    const NavIconButton = ({ 
        icon: Icon, 
        label, 
        count = 0,
        onClick 
    }: {
        icon: React.ComponentType<{ size?: number }>;
        label: string;
        count?: number;
        onClick?: () => void;
    }) => (
        <button 
            onClick={onClick}
            className="flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors relative"
        >
            <Icon size={24} />
            <span className="text-xs mt-1">{label}</span>
            {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {count}
                </span>
            )}
        </button>
    );

    // Search bar component
    const SearchBar = ({ mobile = false }: { mobile?: boolean }) => (
        <div className={`relative ${mobile ? 'w-full' : 'flex-1 max-w-2xl'}`}>
            <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-2 px-4 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#101940] ${
                    mobile ? 'mt-2' : ''
                }`}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Search size={20} />
            </button>
        </div>
    );

    return (
        <div 
            className={`py-3 px-3 border-b bg-white transition-all duration-500 ${
                isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : 'static'
            }`}
        >
            <div className="container mx-auto">
                {/* Desktop & Tablet Layout */}
                <div className="hidden md:flex justify-between items-center gap-4">
                    <Link href="/" className="flex-shrink-0">
                        <NordcomLogo className="h-12 w-auto" />
                    </Link>

                    <SearchBar />
                    
                    <div className="flex items-center gap-6">
                        {userName ? (
                            <UserProfile />
                        ) : (
                            <NavIconButton 
                                icon={LogInIcon} 
                                label="Login" 
                                onClick={() => setShowLogin(true)}
                            />
                        )}
                        
                        <Link href="/wishlist" className="flex flex-col items-center text-gray-600 hover:text-[#101940] transition-colors relative">
                            <HeartIcon size={24} />
                            <span className="text-xs mt-1">Wishlist</span>
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </Link>
                        
                        <NavIconButton 
                            icon={ShoppingCartIcon}
                            label="Cart"
                            count={cartItemsCount}
                            onClick={() => router.push('/cart')}
                        />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-2">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="flex-shrink-0">
                            <NordcomLogo className="h-8 w-auto" />
                        </Link>

                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setShowSearch(!showSearch)}
                                className="p-2 text-gray-600 hover:text-[#101940]"
                            >
                                <Search size={24} />
                            </button>
                            
                            {userName ? (
                                <UserProfile />
                            ) : (
                                <button 
                                    onClick={() => setShowLogin(true)} 
                                    className="p-2 text-gray-600 hover:text-[#101940]"
                                >
                                    <LogInIcon size={24} />
                                </button>
                            )}
                            
                            <Link href="/wishlist" className="p-2 text-gray-600 hover:text-[#101940] relative">
                                <HeartIcon size={24} />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                            </Link>
                            
                            <Link href="/cart" className="p-2 text-gray-600 hover:text-[#101940] relative">
                                <ShoppingCartIcon size={24} />
                                {cartItemsCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                        {cartItemsCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Search Bar - Conditionally rendered */}
                    {showSearch && <SearchBar mobile />}
                </div>
            </div>

            <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
        </div>
    );
};

export default Midnavbar;
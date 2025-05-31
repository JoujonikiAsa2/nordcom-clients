'use client';
import { User, ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface SidebarProps {
  userName?: string;
}

const DashboardSidebar: React.FC<SidebarProps> = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const userName = sessionStorage.getItem("userName")

  const navItems = [
    {
      name: 'Edit Profile',
      href: '/dashboard/profile',
      icon: User,
    
    },
    {
      name: 'My Orders',
      href: '/dashboard/orders',
      icon: ShoppingBag,
      
    },
    {
      name: 'Review',
      href: '/dashboard/reviews',
      icon: Sparkles,
      
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-22 left-1 z-50 p-2 bg-white rounded-lg shadow-md border"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed md:static top-0 left-0 h-full w-56 bg-gray-200 border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out z-40
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3 ">
              <div className="w-12 h-12 border-2 cursor-pointer border-orange-500 bg-[#101940] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs">
                  {userName?.slice(0,4)}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`
                        flex items-center p-2 rounded-lg transition-all duration-200 group
                        ${active 
                          ? 'bg-[#101940] text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-[#101940]'
                        }
                      `}
                    >
                      <Icon 
                        size={20} 
                        className={`
                          mr-3 transition-colors
                          ${active ? 'text-white' : 'text-gray-400 group-hover:text-[#101940]'}
                        `} 
                      />
                      <div className="flex-1">
                        <div className={`font-medium ${active ? 'text-white' : 'text-gray-900'}`}>
                          {item.name}
                        </div>
                       
                      </div>
                      
                      {/* Active Indicator */}
                      {active && (
                        <div className="w-2 h-2 bg-white rounded-full ml-2" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

        </div>
      </div>

      {/* Content Spacer for Desktop */}
      <div className="hidden md:block w-64 flex-shrink-0" />
    </>
  );
};

export default DashboardSidebar;
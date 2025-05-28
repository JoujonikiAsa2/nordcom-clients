"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Home, ChevronRight } from "lucide-react";

const DynamicNavigation = () => {
  const pathName = usePathname();

  // Don't show breadcrumb on home page
  if (pathName === "/") return null;

  // Parse the pathname to create breadcrumb items
  const pathSegments = pathName.split('/').filter(segment => segment);
  
  // Create breadcrumb items
  const breadcrumbItems = [
    { label: "Home", path: "/", isHome: true },
    ...pathSegments.map((segment, index) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path: `/${pathSegments.slice(0, index + 1).join('/')}`,
      isHome: false
    }))
  ];

  return (
    <nav className="flex items-center my-2 space-x-2 text-gray-500 text-sm bg-gray-50 px-4 py-3 rounded-lg">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.path}>
          {/* Home icon or text */}
          {item.isHome ? (
            <div className="flex items-center space-x-1">
              <Home className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                {item.label}
              </span>
            </div>
          ) : (
            <span 
              className={`${
                index === breadcrumbItems.length - 1 
                  ? 'text-gray-900 font-medium' 
                  : 'text-gray-600 hover:text-gray-800 cursor-pointer'
              }`}
            >
              {item.label}
            </span>
          )}
          
          {/* Separator */}
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default DynamicNavigation;
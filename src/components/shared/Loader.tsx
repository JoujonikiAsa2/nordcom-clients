import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-[#101940]"></div>
      </div>
    </div>
  );
};

export default Loader;

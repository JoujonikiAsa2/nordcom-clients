import React from 'react'
import { ArrowRight } from 'lucide-react'

const CampaignSalesSummer = () => {
  return (
    <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-0'>
      <div className='relative min-h-[400px] sm:h-[350px] md:h-[325px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute transform rotate-12 -right-20 -top-20 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full'></div>
          <div className='absolute -left-20 -bottom-20 w-64 sm:w-96 h-64 sm:h-96 bg-orange-300 rounded-full'></div>
        </div>

        <div className='relative flex flex-col md:flex-row justify-around items-center h-full p-6 sm:p-8 md:px-12'>
           {/* Left Section */}
          <div className='text-center md:text-left max-w-md px-4 sm:px-6 md:px-0'>
            <span className='text-white font-semibold text-base sm:text-lg'>Best Sales</span>
            <p className='text-white text-xl sm:text-2xl md:text-3xl font-bold my-3 sm:my-4'>
              Get up to <span className='text-orange-200'>20% OFF</span>
              <br className='hidden sm:block' />on selected items
            </p>
            <p className='text-orange-100 text-xs sm:text-sm mb-4 sm:mb-6'>
              Limited time offer. Do not miss out!
            </p>
            <button className='group flex items-center justify-center md:justify-start gap-2 w-full sm:w-auto bg-white hover:bg-orange-50 text-orange-500 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 transform hover:translate-x-1'>
              <span className='text-sm sm:text-base font-semibold'>Shop Now</span>
              <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1' />
            </button>
          </div>
          
          {/* Right Section */}
          <div className='text-center md:text-left space-y-4 mb-8 md:mb-0 mt-4 md:mt-0'>
            <div className='inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full'>
              <span className='text-white font-medium text-sm sm:text-base'>Summer Offer</span>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-5xl text-white font-bold leading-tight'>
              Campaign<br className='hidden sm:block' /> Sales
            </h1>
            <p className='text-orange-100 text-base sm:text-lg'>10 June to 7 July</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignSalesSummer
'use client'
import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
 import img1 from '@/assets/images/vr.png';
 import img2 from '@/assets/images/watch1.png';
 import img3 from '@/assets/images/watch2.png';
 import img4 from '@/assets/images/phone.png';

// Demo product data
const products = [
  {
    id: 1,
    name: '3D VR',
    image: img1,
    price: '$299'
  },
  {
    id: 2,
    name: 'Smart Watch',
    image: img2,
    price: '$199'
  },
  {
    id: 3,
    name: 'Smartphone',
    image: img3,
    price: '$699'
  },
  {
    id: 4,
    name: 'Smartphone',
    image: img4,
    price: '$699'
  },
   {
    id: 5,
    name: 'Smartphone',
    image: img3,
    price: '$699'
  },
   {
    id: 6,
    name: 'Smartphone',
    image: img3,
    price: '$699'
  },
  // Add more products as needed
]

const SliderProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true
  })
  
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="relative">
     <div className='flex justify-center items-center my-4'>
         <p className='  text-center text-rose-500'>----</p>
     </div>
      
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_210px] min-w-0 bg-white cursor-pointer shadow-md rounded-lg p-4 h-[220px] hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-32 h-32 object-fit rounded-md"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all z-10"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all z-10"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>

       <div className='flex justify-center items-center my-4'>
         <p className='  text-center text-rose-500'>----</p>
     </div>
    </div>
  )
}

export default SliderProducts
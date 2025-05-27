'use client'
import CountdownTimer from '@/utilies/CountdownTimer';
import React from 'react'
import ProductCard from './ProductCard';



const DealOftheDay = () => {
  const initialTime = {
    hours: 12,
    minutes: 50,
    seconds: 45
  };

  return (
    <div>
      <div className='flex gap-5 lg:px-0 px-2 justify-start  mt-10 items-center max-w-7xl mx-auto'>
        <h1 className='lg:text-4xl text-xl font-bold my-4'>Deal of the Day</h1>
        <CountdownTimer initialTime={initialTime} />
      </div>
      <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-0'> 
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
             {
            Array.from({ length: 4 }).map((_, index) => (
            <ProductCard
                key={index}
                title="Samsung(128GB) - Space Black"
                brand="Apple"
                price={1099.99}
                originalPrice={1199.99}
                rating={4.5}
                reviews={1200}
                deliveryDate="Delivered by Tomorrow"
                isNew={true}
                discount="10% OFF"
                />
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default DealOftheDay
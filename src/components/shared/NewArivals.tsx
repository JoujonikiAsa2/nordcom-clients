import React from 'react'
import ProductCard from './ProductCard'
import { ArrowRight } from 'lucide-react'

const NewArivals = () => {
  return (
     <div>
      <div className='flex gap-5 lg:px-0 px-2 justify-start  mt-10 items-center max-w-7xl mx-auto'>
        <h1 className='lg:text-4xl text-xl font-bold my-4'>New Arrivals</h1>
        <div className=' flex  items-center  gap-1 cursor-pointer hover:text-lg'>
           <span> Browse all new Arrivals </span>
            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
         </div>
        
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

export default NewArivals

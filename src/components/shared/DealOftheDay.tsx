
'use client'
import { useState } from 'react'
import CountdownTimer from '@/utilies/CountdownTimer'
import { TProduct } from '@/types/product'
import ProductCard from './ProductCard'
// import Loader from './Loader'

type Props = {
  products: TProduct[]
}

const DealOfTheDay = ({ products }: Props) => {
  const [visibleCount, setVisibleCount] = useState(8)

  const initialTime = {
    hours: 95,
    minutes: 39,
    seconds: 42
  }

  const loadMoreProducts = () => {
    setVisibleCount(prev => prev + 8)
  }

  const visibleProducts = products.slice(0, visibleCount)

  return (
    <section className="py-10 bg-gray-50 p-4">
      <div className='max-w-7xl mx-auto'>
        <div className='flex gap-5 lg:px-0 px-4 justify-between items-center'>
          <div className="flex items-center gap-4">
            <h1 className='lg:text-4xl text-xl font-bold'>Deal of the Day</h1>
            <CountdownTimer initialTime={initialTime} />
          </div>
        </div>

        <div className='my-10 px-4 sm:px-6 lg:px-0'>
          {visibleProducts.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No deals available at the moment</p>
            </div>
          ) : (
            <>
              <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{
                      ...product,
                      brand: typeof product.brand === 'string' ? product.brand : product.brand?.name || ''
                    }}
                  />
                ))}
              </div>

              {visibleCount < products.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={loadMoreProducts}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition duration-300"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default DealOfTheDay

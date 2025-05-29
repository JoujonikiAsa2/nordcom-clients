'use client'

import { useEffect, useState } from 'react'
import CountdownTimer from '@/utilies/CountdownTimer'
import { TProduct } from '@/types/product'
import ProductCard from './ProductCard'
// import Loading from '@/components/ui/Loading'
// import ErrorMessage from '@/components/ui/ErrorMessage'

const DealOftheDay = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const initialTime = {
    hours: 12,
    minutes: 50,
    seconds: 45
  }

  const fetchDealProducts = async () => {
    try {
      setLoading(true)
      const backendUrl =`https://nordcom-backend-server.vercel.app/api/v1/product`
      const response = await fetch(backendUrl)
      const data1 = await response.json()
      const data = data1?.data
      console.log('Fetched deal products:',  data)

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch deal products')
      }

      setProducts(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDealProducts()
  }, [])

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p>Loading ...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

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
          {products?.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No deals available at the moment</p>
            </div>
          ) : (
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={{
                    ...product,
                    brand: typeof product.brand === 'string' ? product.brand : product.brand?.name || ''
                  }}
                />
              ))}
        
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default DealOftheDay
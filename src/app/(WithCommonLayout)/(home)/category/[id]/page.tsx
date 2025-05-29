/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import ProductCard from '@/components/products/ProductCard' 
import NotFound from '../not-found'
import { TCategoryWithProducts, TProduct } from '@/types/product'
import ProductCard from '@/components/shared/ProductCard'

type ProductCardProps = {
  product: TProduct;
};


async function fetchCategoryWithProducts(id: string): Promise<TCategoryWithProducts | null> {
  try {
    const res = await fetch(`https://nordcom-backend-server.vercel.app/api/v1/category/${id}`, {
      next: { revalidate: 3600 }
    })
    
    if (!res.ok) return null
    
    const data = await res.json()
    console.log(data)
    return data.data
  } catch (error) {
    console.error('Error fetching category:', error)
    return null
  }
}

function CategoryDynamicPage() {
  const { id } = useParams()
  const [category, setCategory] = useState<TCategoryWithProducts | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      try {
        setLoading(true)
        const categoryId = Array.isArray(id) ? id[0] : id
        const data = await fetchCategoryWithProducts(categoryId)
        
        if (!data) {
          setError('Category not found')
        } else {
          setCategory(data)
        }
      } catch (err) {
        setError('Failed to load category')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (error) return <NotFound />
  if (loading) return <div>Loading...</div> // Add a proper loading component
  if (!category) return <NotFound />

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      
      {category.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.products.map((product) => {
            // Convert TProduct to Product by ensuring brand is a string
            const productForCard = {
              ...product,
              brand: typeof product.brand === 'string' ? product.brand : product.brand?.name ?? '',
            };
            return <ProductCard key={product.id} product={productForCard} />;
          })}
        </div>
      ) : (
        <p className="text-gray-500">No products found in this category</p>
      )}
    </div>
  )
}

export default CategoryDynamicPage
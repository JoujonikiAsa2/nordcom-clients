'use client'
import Image from 'next/image'
import prodImg from '@/assets/images/pHeadphone.png'
import shoppingIcon from '@/assets/svg/shopingIcon.svg'
import { useRouter } from 'next/navigation'

interface Product {
  id: string
  name: string
  price: number
  discountPrice: number
  deliveryDate?: string
  images: string[]
  isNew?: boolean
  brand?: string
  rating?: number
  reviews?: number
  stock?: number
}

interface ProductCardProps {
  product: Product
}

const defaultProduct: Product = {
  id: '',
  name: 'Product Name',
  price: 0,
  discountPrice: 0,
  images: [],

  rating: 5,
  reviews: 0,
  isNew: false,
  stock: 0
}

const ProductCard = ({ product = defaultProduct }: ProductCardProps) => {
 const router = useRouter()
  const {
    name,
    price,
    discountPrice,
    images,
    isNew,

    rating = 5,
    reviews = 120
  } = product

  const discount = Math.round(((price - discountPrice) / price) * 100)

  const handleDetails = (id: string)=>{
    router.push(`/products/${id}`)
  }

  return (
    <div className="w-full max-w-xs rounded-2xl border p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative">
        <div
          onClick={() => handleDetails(product.id)}
        className="cursor-pointer top-2 right-2 z-10 hover:scale-110 transition-transform duration-300">
          <Image
            src={images[0] || prodImg}
            alt={name}
            width={300}
            height={300}
            className="mx-auto object-contain"
            priority
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 gap-2 flex">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-red-600 transition-colors">
              {discount}% OFF
            </span>
          )}
          {isNew && (
            <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 hover:bg-orange-500 transition-colors rounded-full">
              New
            </span>
          )}
        </div>
      </div>

      {/* Delivery Badge */}
      <div className="text-center mt-3">
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full font-medium">
          Free Delivery
        </span>
      </div>

      {/* Product Details */}
      <div className="mt-3 space-y-1">
        <p className="text-sm text-gray-500 font-medium">Apple</p>
        
        {/* Ratings */}
        <div className="flex items-center gap-1 text-orange-500 text-sm">
          {'★'.repeat(Math.floor(rating))}
          <span className="text-gray-400 text-xs">({reviews})</span>
        </div>

        {/* Product Name */}
        <h3 className="text-base font-semibold text-slate-800 line-clamp-2">
          {name.slice(0, 20)} ...
        </h3>

        {/* Delivery Info */}
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span>Delivery by 2 working days</span>
        </div>
      </div>

      {/* Price and Cart Button */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          {price > discountPrice && (
            <p className="text-sm text-gray-400 line-through">${price}</p>
          )}
          <p className="text-lg font-bold text-slate-900">${discountPrice}</p>
        </div>

        <button 
         onClick={() => handleDetails(product.id || '')}
          className="bg-[#101940] hover:bg-orange-400 text-white p-2 rounded-md w-20 
            flex items-center justify-center transition-colors duration-300 
            active:scale-95 transform"
        >
          <Image 
            src={shoppingIcon} 
            alt="Add to Cart" 
            width={20} 
            height={20} 
          />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
import Image from 'next/image'
import { FC } from 'react'
import prodImg from '@/assets/images/pHeadphone.png'; 
import shoppingIcon from '@/assets/svg/shopingIcon.svg'; 
import ProductCardProps from '@/types/productCardType';




const ProductCard: FC<ProductCardProps> = ({
  title,
  brand,
  rating,
  reviews,
  price,
  originalPrice,
  deliveryDate,
  isNew,
  discount,
}) => {
  return (
    <div className="w-full max-w-xs rounded-2xl border p-4 shadow-md hover:shadow-xl transition">
      {/* Image & Badges */}
      <div className="relative">
      <div className='cursor-pointer top-2 right-2 z-10 hover:scale-110 transition'>
        <Image
          src={prodImg}
          alt={title}
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
        <div className="absolute top-2 left-2 gap-2 flex">
          {discount && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full hover:bg-red-600 transition ">
              {discount}
            </span>
          )}
          {isNew && (
            <span className="bg-orange-400 text-white text-xs font-semibold px-2 py-1 hover:bg-orange-500 transition rounded-full">
              New
            </span>
          )}
        </div>
      </div>

      {/* Free Delivery */}
      <div className="text-center mt-3">
        <span className="bg-gray-100 text-sm px-3 py-1 rounded-full font-medium">
          Free Delivery
        </span>
      </div>

      {/* Info */}
      <div className="mt-3 space-y-1">
        <p className="text-sm text-gray-500 font-medium">{brand}</p>
        <div className="flex items-center gap-1 text-orange-500 text-sm">
          {'★'.repeat(Math.floor(rating))}{' '}
          <span className="text-gray-400 text-xs">({reviews.toLocaleString()})</span>
        </div>
        <h3 className="text-base font-semibold text-slate-800">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600">
        
          <span>{deliveryDate}</span>
        </div>
      </div>

      {/* Price & Cart */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          {originalPrice && originalPrice !== price && (
            <p className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</p>
          )}
          <p className="text-lg font-bold text-slate-900">${price.toFixed(2)}</p>
        </div>
        <button className="bg-[#101940] hover:bg-orange-400 text-white p-1 rounded-md w-20 flex items-center justify-center transition">
            <Image src={shoppingIcon} alt="Add to Cart" width={20} height={20} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard

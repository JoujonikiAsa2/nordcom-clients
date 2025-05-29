'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Heart, Trash2, ShoppingCart } from 'lucide-react'
import iphone from '../../../assets/wishlist/iphone.png'
import laptop from '../../../assets/wishlist/laptop.jpeg'
import watch from '../../../assets/wishlist/watch.png'
// Sample wishlist data
const initialWishlist = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999,
    image: iphone,
    stock: true,
    brand: 'Apple'
  },
  {
    id: '2',
    name: 'Samsung Galaxy Watch 6',
    price: 299,
    image: watch,
    stock: true,
    brand: 'Samsung'
  },
  {
    id: '3',
    name: 'MacBook Air M2',
    price: 1299,
    image: laptop,
    stock: false,
    brand: 'Apple'
  }
]

const WishList = () => {
  const [wishlist, setWishlist] = useState(initialWishlist)

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(item => item.id !== id))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
        <h1 className="text-2xl font-bold text-gray-900">My Wishlist ({wishlist.length})</h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500">Add items you love to your wishlist. Review them anytime and easily move them to the cart.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain"
                />
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">{item.brand}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{item.name}</h3>
                <p className="text-lg font-bold text-gray-900 mt-2">${item.price}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-sm ${item.stock ? 'text-green-500' : 'text-red-500'}`}>
                    {item.stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                      ${item.stock 
                        ? 'bg-[#101940] hover:bg-[#1c2f6e] text-white' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    disabled={!item.stock}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishList
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Share2, Star, Truck, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-white">
      <Card className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <CardContent className="p-0">
          {/* Header with badges and icons */}
          <div className="relative bg-gray-50 p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  15% off
                </span>
                <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                  New
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="w-5 h-5 text-gray-400" />
                <Eye className="w-5 h-5 text-gray-400" />
                <Share2 className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Product Image */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center relative">
                {/* Headphone representation */}
                <div className="w-24 h-24 border-4 border-gray-600 rounded-full relative">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-600 rounded-t-full"></div>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-6 h-8 bg-gray-600 rounded-l-full"></div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-6 h-8 bg-gray-600 rounded-r-full"></div>
                  {/* Purple LED indicator */}
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4">
            {/* Free Delivery Badge */}
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-sm font-medium">
                Free Delivery
              </span>
            </div>

            {/* Brand and Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Samsung</span>
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 fill-orange-400 text-orange-400"
                    />
                  ))}
                  <Star className="w-3 h-3 text-gray-300" />
                </div>
                <span className="text-gray-400 text-xs ml-1">(1,201)</span>
              </div>
            </div>

            {/* Product Title */}
            <h3 className="font-semibold text-gray-900 text-lg mb-3 leading-tight">
              Headphone Sony gaming Music
            </h3>

            {/* Delivery Date */}
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600 text-sm">Thursday, 23 Dec</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm line-through">
                  $14.99
                </span>
                <span className="text-2xl font-bold text-gray-900">$14.99</span>
              </div>
              <button className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-xl transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

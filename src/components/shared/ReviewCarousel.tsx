

'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react'

// Types
interface Review {
  id: number
  rating: number
  title: string
  author: string
  date: string
  content: string
  verified: boolean
}

interface ReviewCarouselProps {
  averageRating?: number
  totalReviews?: number
  reviews?: Review[]
}

// Components
const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' }) => {
  const starSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`${starSize} ${
            index < rating 
              ? 'fill-orange-400 text-orange-400' 
              : 'fill-gray-300 text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

const GoogleIcon = () => (
  <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  </div>
)

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 mx-2 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <StarRating rating={review.rating} size="sm" />
      {review.verified && (
        <div className="flex items-center gap-1">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span className="text-xs text-gray-500">Verified</span>
        </div>
      )}
    </div>
    
    <h3 className="font-semibold text-gray-900 mb-3">{review.title}</h3>
    
    <div className="mb-3">
      <p className="text-sm font-medium text-gray-900">{review.author}</p>
      <p className="text-xs text-gray-500">{review.date}</p>
    </div>
    
    <p className="text-sm text-gray-600 line-clamp-3">{review.content}</p>
  </div>
)

const NavigationButton = ({ 
  onClick, 
  disabled, 
  direction 
}: { 
  onClick: () => void
  disabled: boolean
  direction: 'left' | 'right' 
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute ${direction === 'left' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 
    p-2 rounded-full bg-white border border-gray-300 shadow-sm z-10 transition-all
    ${disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50 hover:border-gray-400'}`}
  >
    {direction === 'left' ? (
      <ChevronLeft className="w-5 h-5" />
    ) : (
      <ChevronRight className="w-5 h-5" />
    )}
  </button>
)

export default function ReviewCarousel({ 
  averageRating = 4,
  totalReviews = 14,
  reviews = defaultReviews 
}: ReviewCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    containScroll: 'trimSnaps'
  })
  
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const updateButtons = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    updateButtons()
    emblaApi.on('select', updateButtons)
    emblaApi.on('reInit', updateButtons)
    return () => {
      emblaApi.off('select', updateButtons)
      emblaApi.off('reInit', updateButtons)
    }
  }, [emblaApi, updateButtons])

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="mb-12">
        <div className="flex flex-col items-center text-center">
          <StarRating rating={averageRating} />
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Customer Reviews</h2>
          <p className="text-gray-600 mt-2">
            Based on {totalReviews} verified customer reviews
          </p>
          <div className="flex items-center gap-2 mt-4">
            <GoogleIcon />
            <span className="text-lg font-semibold text-gray-900">Google Reviews</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <NavigationButton 
          onClick={scrollPrev} 
          disabled={!canScrollPrev} 
          direction="left" 
        />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <NavigationButton 
          onClick={scrollNext} 
          disabled={!canScrollNext} 
          direction="right" 
        />
      </div>
    </section>
  )
}




const defaultReviews: Review[] = [
  {
    id: 1,
    rating: 5,
    title: "Nic Product",
    author: "Sabih Al Hasan",
    date: "Monday, 12 May",
    content: "Baserat pa 124 Baserat Baserat",
    verified: true
  },
  {
    id: 2,
    rating: 5,
    title: "Great Product",
    author: "Sabih Al Hasan", 
    date: "Monday, 12 May",
    content: "Baserat pa 124 Baserat Baserat",
    verified: true
  },
  {
    id: 3,
    rating: 5,
    title: "Awesome Product",
    author: "Sabih Al Hasan",
    date: "Monday, 12 May", 
    content: "Baserat pa 124 Baserat Baserat",
    verified: true
  },
  {
    id: 4,
    rating: 3.5,
    title: "Average Product",
    author: "Omar Faruk",
    date: "Monday, 12 May", 
    content: "It was average product i am not happy ..",
    verified: false
  },
  {
    id: 5,
    rating: 3.5,
    title: "Average Product",
    author: "Omar Faruk",
    date: "Monday, 12 May", 
    content: "It was average product i am not happy ..",
    verified: false
  }
]

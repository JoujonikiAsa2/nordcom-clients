'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import sonyImg from '@/assets/sony.png'
import xiaomiImg from '@/assets/mi.png'  
import appleImg from '@/assets/apple.png'
import lgImg from '@/assets/lg.png'
// import asusImg from '@assets/asus.png'
import nokiaImg from '@/assets/nokia.png'
import samsungImg from '@/assets/samsung.png'

const logos = [
  { src: sonyImg, alt: 'Sony' },
  { src: xiaomiImg, alt: 'Mi' },
  { src: appleImg, alt: 'Apple' },
  { src: appleImg, alt: 'Apple' },
  { src: lgImg, alt: 'LG' },
  { src: lgImg, alt: 'LG' },
  // { src: asusImg, alt: 'ASUS' },
  { src: nokiaImg, alt: 'Nokia' },
  { src: nokiaImg, alt: 'Nokia' },
  { src: samsungImg, alt: 'Samsung' },
]

export default function BrandCarousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true, loop: true })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex space-x-6">
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-32 h-20 flex items-center cursor-pointer justify-center border p-2 bg-white rounded shadow-sm"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={40}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

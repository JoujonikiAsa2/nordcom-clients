'use client'
import Image from 'next/image';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImg1 from '@/assets/images/hero-slider4.png';
import heroImg2 from '@/assets/images/hero-slider2.png'; 
import heroImg3 from '@/assets/images/hero-slider3.png';
import iPhone from '@/assets/images/1.png';
import OnePlus from '@/assets/images/2.png';
import Pixel from '@/assets/images/3.png';      
import Galaxy from '@/assets/images/4.png';

const Hero = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        // Add Autoplay plugin
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext();

    const heroSlides = [heroImg1, heroImg2, heroImg3];

    const productCards = [
        { image: iPhone, title: 'iPhone 15 Pro' },
        { image: OnePlus, title: 'OnePlus 12' },
        { image: Pixel, title: 'Pixel 8 Pro'},
        { image: Galaxy, title: 'Galaxy S24' }
    ];

    return (
        <div className='max-w-7xl mx-auto py-5 px-4 lg:px-0'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {/* Hero Carousel */}
                <div className='lg:col-span-2 relative'>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {heroSlides.map((slide, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0">
                                    <Image 
                                        src={slide} 
                                        alt={`Hero ${index + 1}`}
                                        className="w-full lg:h-[400px] object-fit lg:rounded-lg"
                                        width={800}
                                        height={400}
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Carousel Controls */}
                    <button 
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Product Cards */}
                <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4'>
                    {productCards.map((product, index) => (
                        <div 
                            key={index}
                            className='group rounded-lg bg-gray-300 transition-transform hover:scale-105'
                        >
                            <Image 
                                src={product.image} 
                                alt={product.title}
                                className="w-full h-full object-fit rounded-lg"
                                width={200}
                                height={200}
                            />
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
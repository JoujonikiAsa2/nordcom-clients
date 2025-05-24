import Hero from '@/components/shared/Hero';
import SliderProducts from '@/components/slidingProduct/sliderProducts';
import React from 'react';

const Home = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
        <Hero />
        <SliderProducts />
    </div>
    </>
  );
};

export default Home;
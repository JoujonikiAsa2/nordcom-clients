import CampaignSales from '@/components/shared/CampaignSales';
import DealOftheDay from '@/components/shared/DealOftheDay';
import Hero from '@/components/shared/Hero';
import NewArivals from '@/components/shared/NewArivals';
import SliderProducts from '@/components/slidingProduct/sliderProducts';
import React from 'react';

const Home = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
        <Hero />
        <SliderProducts />
        <DealOftheDay />
        <NewArivals />
        <CampaignSales />
    </div>
    </>
  );
};

export default Home;
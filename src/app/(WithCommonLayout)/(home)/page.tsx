import Blog from '@/components/shared/Blog';
import BrandCarousel from '@/components/shared/BrandCarousel';
import CampaignSales from '@/components/shared/CampaignSales';
import CampaignSalesSummer from '@/components/shared/CampaignSalesSummer';
import DealOftheDay from '@/components/shared/DealOftheDay';
import Hero from '@/components/shared/Hero';
import NewArivals from '@/components/shared/NewArivals';
import ReviewCarousel from '@/components/shared/ReviewCarousel';
import WeOffering from '@/components/shared/WeOffering';
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
         <NewArivals />
         <CampaignSalesSummer />
        <div className='my-10'>
           <BrandCarousel />
        </div>
        <WeOffering />
        <Blog />
        <ReviewCarousel
        averageRating={4.5}
        totalReviews={250}
        />
    </div>
    </>
  );
};

export default Home;
import Blog from '@/components/shared/Blog';
import BrandCarousel from '@/components/shared/BrandCarousel';
import CampaignSales from '@/components/shared/CampaignSales';
import CampaignSalesSummer from '@/components/shared/CampaignSalesSummer';
import DealOfTheDay from '@/components/shared/DealOftheDay';
import Hero from '@/components/shared/Hero';
import NewArivals from '@/components/shared/NewArivals';
import ReviewCarousel from '@/components/shared/ReviewCarousel';
import Subscription from '@/components/shared/subscription';
import WeOffering from '@/components/shared/WeOffering';
import SliderProducts from '@/components/slidingProduct/sliderProducts';
import { fetchAllProduct } from '@/lib/api/product';
import React from 'react';

const Home = async() => {
  const products = await fetchAllProduct()
  return (
    <>
    <div className='max-w-7xl mx-auto'>
         <Hero />
         <SliderProducts />
         <DealOfTheDay products={products} />
         <NewArivals products={products} title="New Arrivals" />
         <CampaignSalesSummer />
         <NewArivals products={products} title="Best Price" />
         <BrandCarousel />
         <CampaignSales />
         <WeOffering />
         <Blog />
         <Subscription />
         <ReviewCarousel
          averageRating={4.5}
          totalReviews={250}
         />
    </div>
    </>
  );
};

export default Home;
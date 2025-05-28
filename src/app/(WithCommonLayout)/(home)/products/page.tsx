import React from "react";
import ProductCard from "@/components/products/ProductCard";
import Banner from "@/components/banner/banner";
import FilterSidebar from "@/components/filterSidebar/filterSidebar";
import Category from "@/components/category/category";
const ProductPage = () => {
  return (
    <div>
      <Banner
        title="Most Popular Headphones"
        description=" Discover the top-selling headphones on our website. Shop now for unbeatable deals and exceptional sound quality. Experience the perfect blend of style and performance with our top-rated headphones."
      />

      {/* category */}
      <Category />
      <hr className="mb-10" />
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <FilterSidebar />
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

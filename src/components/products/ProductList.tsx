"use client";
import React, { useState } from "react";
import Banner from "@/components/banner/banner";
import FilterSidebar from "@/components/filterSidebar/filterSidebar";
import Category from "@/components/category/category";
import ProductCard from "@/components/shared/ProductCard";
import { TProduct } from "@/types/product";
import { Filter, X } from "lucide-react";
import { Select } from "@/components/ui/select";
import Loader from "../shared/Loader";
const ProductList = ({ products }: { products: TProduct[] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    console.log("clicked to open drawer");
    setIsDrawerOpen(true);
  };

  return (
    <div>
      <Banner
        title="Most Popular Headphones"
        description=" Discover the top-selling headphones on our website. Shop now for unbeatable deals and exceptional sound quality. Experience the perfect blend of style and performance with our top-rated headphones."
      />

      {/* category */}
      <Category />
      <hr className="mb-10" />

      <div className="flex justify-between items-center my-4 mx-4 lg:hidden">
        <button
          onClick={handleDrawerOpen}
          className="w-28 h-9 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded transition duration-300"
        >
          <Filter />
          Filter
        </button>
        <div className="flex justify-between items-center gap-2">
          Sort By{" "}
          <Select className="w-28">
            <option>Default</option>
            <option>Latest</option>
            <option>Low Price</option>
            <option>High Price</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-8 pb-12">
        <div className="hidden lg:block lg:col-span-2">
          <FilterSidebar />
        </div>
        <div className="col-span-8 lg:col-span-6 grid  grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 mx-4">
          {products?.length > 0 ? (
            products.map((product: TProduct) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  brand:
                    typeof product.brand === "string"
                      ? product.brand
                      : product.brand?.name || "",
                }}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
      {isDrawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer */}
          <div
            className={`py-6 fixed top-0 left-0 h-screen w-full md:w-2/6 bg-white z-50 overflow-y-auto transform transition-transform duration-500 ease-in-out
            ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="w-full flex justify-end items-center">
              <button
                className="w-8 h-8 rounded-full border flex justify-center items-center mr-4"
                onClick={() => setIsDrawerOpen(false)}
              >
                <X />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;

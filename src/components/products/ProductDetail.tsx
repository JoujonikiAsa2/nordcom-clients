"use client";
import CarIcon from "@/assets/svg/car";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { Minus, Plus, ShoppingCartIcon, Star } from "lucide-react";
import { Button } from "../ui/button";
import { TProduct } from "@/types/product";

const ProductDetail = ({ product }: { product: TProduct }) => {
  const [preview, setPreview] = React.useState<string>("");
  const [borderIndex, seBorderIndex] = React.useState<number>(0);

  const handleImage = (item: string, index: number) => {
    setPreview(item as string);
    seBorderIndex(index as number);
  };

  console.log(product);

  return (
    <div className="min-h-screen">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 px-4 poppins">
        {/* left side */}
        <div className="w-full">
          <Image
            src={preview ? `${preview}` : product.images[0]}
            width={581}
            height={318}
            alt="main image"
            className="w-full h-[328px] object-contain border bg-[#EAEAEA] rounded-xl"
          />
          <div className="grid grid-cols-2 sm md:grid-cols-4 gap-4 pt-4">
            {product.images.slice(0, 4).map((item: string, index: number) => (
              <div key={index}>
                <Image
                  src={item}
                  width={133}
                  height={96}
                  alt="main image"
                  className={`w-auto h-auto bg-[#EAEAEA] rounded hover:cursor-pointer ${
                    borderIndex === index && "border border-[#101940]"
                  }`}
                  onClick={() => {
                    handleImage(item, index);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="w-full"></div>
        </div>

        {/* right side */}
        <div className="">
          <div className="w-full space-y-3">
            <p className=" font-normal text-base  leading-[170%]">
              {product.category.name}
            </p>
            <p className="font-semibold text-3xl text-[#101940] leading-[140%]">
              {product.name}
            </p>
            <div>
              <p className="font-normal text-base text-[#101940] leading-[170%] flex gap-1">
                <CarIcon stroke="#394060" />
                <span>{format(product.createdAt, "EEEE, dd LLL")}</span>,
              </p>
              <p className="font-normal text-base text-[#848484] leading-[170%] flex gap-1">
                <del>$12.99</del>,
              </p>
            </div>
            <div className="font-semibold text-3xl text-[#101940] leading-[150%] flex  flex-col md:flex-row items-center gap-6">
              <p>$12.99</p>
              <p className="font-normal text-base text-[#848484] leading-[170%] flex items-center gap-4">
                <Star fill="#FAB758" className="text-[#FAB758] size-5" />
                <span>4.5 - 254</span> reviews
              </p>
            </div>
          </div>
          <div className="font-semibold text-xl text-[#101940] leading-[150%] flex gap-4 pt-12">
            <div className="p-2 rounded flex gap-2 w-[110px] h-[44px] bg-[#EAEAEA]">
              <Button
                variant="ghost"
                className="items-center gap-2 bg-[#F9F9F9] h-full w-1/3"
              >
                <Plus/>
              </Button>
              <p className=" h-full flex items-center justify-center w-1/2">
                <span>{1}</span>
              </p>
              <Button
                variant="ghost"
                className="items-center gap-2 bg-[#F9F9F9] h-full w-full md:w-1/3"
              >
                <Minus/>
              </Button>
            </div>
            <Button
              variant="default"
              className="items-center gap-2 bg-orange-400 hover:bg-[#101940] hover:text-white  w-[160px] md:w-[200px] h-[44px] font-semibold text-xl"
            >
              <ShoppingCartIcon className="text-2xl"/>
              <span>Add To Cart</span>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-9 pt-8">
            {product.description && (
              <div className="w-full">
                <div className="bg-[#F9F9F9] w-full h-[70px] rounded-t-2xl font-medium text-2xl text-[#101940] leading-[150%]  flex items-center justify-start px-4">
                  <span>Description</span>
                </div>
                <div className=" rounded-b-2xl px-8 py-4 shadow-sm">
                  <p className="font-normal text-base text-[#848484] leading-[170%]">
                    {product.description}
                  </p>
                </div>
              </div>
            )}
            {product.specification && (
              <div className="w-full">
                <div className="bg-[#F9F9F9] w-full h-[70px] rounded-t-2xl font-medium text-2xl text-[#101940] leading-[150%]  flex items-center justify-start px-4">
                  <span>Specification</span>
                </div>
                <div className=" rounded-b-2xl px-8 py-4 shadow-sm">
                  {product?.specification?.map(
                    (
                      specification: { label: string; value: string },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="font-normal text-base text-[#848484] leading-[170%] grid grid-cols-5 gap-4 border-b py-2"
                      >
                        <div className="col-span-2">{specification.label}</div>
                        <div className="col-span-3 text-[#2B2B2B]">
                          {specification.value}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

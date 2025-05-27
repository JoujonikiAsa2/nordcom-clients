"use client";
import CarIcon from "@/assets/svg/car";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import { HeartIcon, Minus, Plus, ShoppingCartIcon, Star } from "lucide-react";
import { Button } from "../ui/button";
import { TProduct } from "@/types/product";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import {
  decrement,
  increment,
} from "@/redux/store/features/counter/counterSlice";
import { toast } from "sonner";

const ProductDetail = ({ product }: { product: TProduct }) => {
  const [preview, setPreview] = React.useState<string>("");
  const [borderIndex, seBorderIndex] = React.useState<number>(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleImage = (item: string, index: number) => {
    setPreview(item as string);
    seBorderIndex(index as number);
  };

  const handleFavoriteProduct = () =>{
    toast.success("Added to the wishlist")
  }
  return (
    <div className="h-full">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 px-4 poppins">
        {/* left side */}
        <div className="w-full">
          <Image
            src={preview ? `${preview}` : product.images[0]}
            width={581}
            height={318}
            alt="main image"
            className="w-full h-[318px] object-contain border bg-[#EAEAEA] rounded-xl"
          />
          <div className="grid grid-cols-4 gap-4 pt-4">
            {product.images.slice(0, 4).map((item: string, index: number) => (
              <div key={index}>
                <Image
                  src={item}
                  width={133}
                  height={96}
                  alt="sub image"
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
            <div className=" font-normal text-base  leading-[170%] flex gap-2">
              <p>{product.category.name}</p>

              <button onClick={handleFavoriteProduct}>
                <HeartIcon />
              </button>
            </div>
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
            <div className="font-semibold text-3xl text-[#101940] leading-[150%] flex items-center gap-6">
              <p>${product.price}</p>
              <p className="font-normal text-base text-[#848484] leading-[170%] flex items-center gap-4">
                <Star fill="#FAB758" className="text-[#FAB758] size-5" />
                <span>4.5 - 254</span> reviews
              </p>
            </div>
          </div>
          <div className="font-semibold text-xl text-[#101940] leading-[150%] flex flex-wrap gap-4 pt-12">
            <div className="p-2 rounded flex gap-2 w-fit h-[44px] bg-[#EAEAEA]">
              <Button
                variant="ghost"
                className="items-center gap-2 bg-[#F9F9F9]  w-8 h-full"
                onClick={() => dispatch(increment())}
              >
                <Plus />
              </Button>
              <p className=" h-full flex items-center justify-center w-fit p-1">
                <span>{count}</span>
              </p>
              <Button
                variant="ghost"
                className="items-center gap-2 bg-[#F9F9F9] w-8 h-full"
                onClick={() => dispatch(decrement())}
              >
                <Minus />
              </Button>
            </div>
            <Button
              variant="default"
              className="w-[170px]  h-[44px] items-center gap-2 bg-orange-400 hover:bg-[#101940] text-white"
            >
              <ShoppingCartIcon />
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
                        className="font-normal text-base text-[#848484] leading-[170%] flex flex-wrap gap-4 border-b py-2"
                      >
                        <div className="">{specification.label}</div>
                        <div className=" text-[#2B2B2B]">
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

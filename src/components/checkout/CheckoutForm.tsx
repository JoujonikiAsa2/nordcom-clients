"use client";
import React, { useCallback, useState }  from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema } from "./formValidation";
import { Select } from "../ui/select";
import { Slot } from "@radix-ui/react-slot";
import Image from "next/image";
import { getMyCarts } from "../services/CartService";
import { useDataFetch } from "@/hooks/useFetch";
import { CartItem } from "@/types/cart";
import { Button } from "../ui/button";


const CheckoutForm = () => {
  const [coupon, setCoupon] = useState("");
  const fetchCarts = useCallback(() => {
    return getMyCarts();
  }, []);
  const { data } = useDataFetch(fetchCarts);
  const subtotal = data?.data?.subtotal
  const carts = data?.data?.data;
  console.log(carts?.items);

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const payload = {...data, coupon}
      console.log(payload);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div  className="w-full grid gri/d-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 w-full mt-12 mb-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 gap-4 items-center">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Email
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3  h-[52px]">
                    <Input
                      type="email"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      placeholder="Add Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 gap-4 items-center">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Address
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3  h-[52px]">
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      placeholder="Add address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingAddress"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 gap-4 items-center">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Shipping Address
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3 h-[52px]">
                    <Input
                      type="text"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                      placeholder="Add Shipping Address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 gap-4 items-center">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Payment Metthod
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3  h-[52px]">
                    <Select
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    >
                      <option disabled selected hidden className="">
                        Select payment method
                      </option>
                      <option value="CARD">CARD</option>
                      <option value="BANK">BANK</option>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Slot />
            </div>
          </form>
        </Form>
      </div>
      <div className="mt-12 p-4 h-fit // rounded-xl">
        <div>
          {carts?.items?.map((cartItem: CartItem, index: number) => (
            <div key={index} className="rounded-xl bg-white h-32 p-6">
              <p className="text-lg text-[#2B2B2B]">
                {cartItem?.quantity} Item:{" "}
                {cartItem?.product?.price * cartItem?.quantity}
              </p>
              <Image
                src={cartItem?.product?.images[0]}
                width={50}
                height={50}
                alt="sub image"
                className={`w-auto h-auto bg-[#EAEAEA] rounded hover:cursor-pointer`}
              />
            </div>
          ))}
        </div>
        <div className="text-lg text-[#2B2B2B] px-6 py-4 flex justify-between border-b">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="text-lg text-[#2B2B2B] px-6 py-4 flex justify-between">
          <p>Total</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex  gap-4">
          <Input
            type="text"
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Your Coupon Code"
            className="h-12"
          />
          <Button className="bg-[#B5B5B5] text-white h-12">Add</Button>
        </div>
        <Button
          type="submit"
          variant="default"
          className=" mt-4 flex-wrap items-center bg-orange-400 hover:bg-[#101940] hover:text-white text-[#101940] w-full h-12 text-xl font-bold"
        >
          <span>Submit Order</span>
        </Button>
      </div>
    </div>
  );
};

export default CheckoutForm;

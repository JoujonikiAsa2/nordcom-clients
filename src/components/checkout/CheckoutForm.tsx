"use client";
import React, { useState } from "react";
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
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { addOrder } from "../services/OrderService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { TextArea } from "../ui/textarea";
import * as Switch from "@radix-ui/react-switch";
import { clearCart } from "@/redux/features/cart/cartSlice";

const CheckoutForm = () => {
  const dispatch = useAppDispatch()
  const [coupon, setCoupon] = useState("");
  const router = useRouter();
  const { total } = useAppSelector((state) => state.cart);


  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data)
      const res = await addOrder({...data, coupon});
      dispatch(clearCart())
      toast.success("Order submited successfully!");
      if(data.paymentMethod === "online"){
        router.push(`/payment/${res?.data?.id}`);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 p-4 lg:0">
          <div className="md:col-span-2 w-full mt-12 mb-20 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid grid-cols-4 gap-4 items-center">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Email
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3  h-[40px]">
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
                  <FormControl className="col-span-4 md:col-span-3">
                    <TextArea
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
                  <FormControl className="col-span-4 md:col-span-3">
                    <TextArea
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
                <FormItem className="grid grid-cols-4 gap-4 items-center text-[#848484]">
                  <FormLabel className="hidden md:block text-[#848484] text-lg">
                    Payment Method
                  </FormLabel>
                  <FormControl className="col-span-4 md:col-span-3">
                    <div className="flex flex-col md:flex-row gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="cod"
                          checked={field.value === "cod"}
                          onChange={field.onChange}
                          className="form-radio text-violet-600"
                        />
                        <span>Cash on Delivery</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value="online"
                          checked={field.value === "online"}
                          onChange={field.onChange}
                          className="form-radio text-violet-600"
                        />
                        <span>Online Payment</span>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3 p-4 bg-transparent border rounded-lg">
              <Switch.Root
                className="relative h-[25px] w-[120px] bg-gray-400 cursor-default rounded-full bg-blackA6 shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-gray-400 data-[state=checked]:bg-green-400"
                id="terms"
              >
                <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white  shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
              <div className="text-sm text-gray-600">
                <p>
                  By submitting my email and mobile number on this form, I agree
                  to receive customized promotional and personalized messages. I
                  can unsubscribe at the email in phone number provided. Consent
                  is not a condition of purchase. More information, Terms of
                  Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
          <div className="md:mt-12 p-4 h-fit bg-[#FFF8EE] rounded-xl">

            <div className="text-lg text-[#2B2B2B] px-6 py-4 flex justify-between border-b">
              <p>Subtotal</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="text-lg text-[#2B2B2B] px-6 py-4 flex justify-between">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
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
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3"
              size="lg"
            >
              Submit Order
            </Button>
          </div>
        </div>
      </form>{" "}
    </Form>
  );
};

export default CheckoutForm;

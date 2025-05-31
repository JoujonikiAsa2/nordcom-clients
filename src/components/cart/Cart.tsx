"use client";
import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  CartItem,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { addToDBCart, removeItemFromCart } from "../services/CartService";
import shoppintCart from "@/assets/shopping-cart.png";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);
  const watchTotal = 3.99;
  const orderTotal = total + watchTotal;

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
    const item = {
      productId: id,
      quantity,
    };
    addToDBCart(item);
    toast.success("Cart updated");
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
    removeItemFromCart(id);
    toast.success("Item removed from cart");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col  gap-4 items-center justify-center">
        <Image
          src={shoppintCart}
          alt={"Shopping Cart"}
          height={100}
          width={100}
          className="object-contain hover:scale-110 transition-transform duration-300"
          priority
        />
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <Link href="/products">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 lg:p-0">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#FFF8EE] p-2">
          <div>
            <div className="space-y-4">
              {items?.map((item:CartItem, index:number) => (
                <div key={item.id} className="bg-white rounded-xl p-4 m-4">
                  <div className="flex items-center gap-4 py-4">
                    <div className="flex-shrink-0">
                      <Image
                        src={item.images[0] || "/placeholder.svg"}
                        alt={`item-${index}`}
                        width={60}
                        height={60}
                        className="rounded-lg border"
                      />
                    </div>

                    <div className="flex-1 min-w-0 text-[#2B2B2B]">
                      <h3 className="text-sm font-medium mb-1">{item.name}</h3>
                      <p className="text-lg font-semibold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() =>
                          handleUpdateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Cart subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Watch Total</span>
                  <span className="font-medium">${watchTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link href="/checkout">
                <Button
                  className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3"
                  size="lg"
                >
                  Proceed To Checkout
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;

"use client";

import React from "react";
import { CheckoutFormComponent, DetailProductComponent } from "@/components";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cart, getTotal } = useCart();
  const deliveryAmount = 20;
  const subtotal = getTotal();
  const total = subtotal + deliveryAmount;

  return (
    <div className="container mx-auto pt-16 pb-6">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="flex flex-row w-full md:w-1/2 lg:w-1/2 justify-between">
          <h1 className="text-3xl text-white font-bold mb-6">Checkout</h1>
        </div>

        <div className="flex flex-row w-full md:w-1/2 lg:w-1/2 justify-center md:justify-end lg:justify-end">
          <div className="flex flex-row space-x-4 items-end justify-center">
            <div className="flex flex-col">
              <div className="flex-grow border-t border-gray-400 flex my-2"></div>
              <h3 className="text-white text-[14px] font-thin">
                Shipping Information
              </h3>
              <p className="text-white text-[8px] font-thin">
                Provide your shipping detail information
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex-grow border-t border-gray-400 flex my-2"></div>
              <h3 className="text-white text-[14px] font-thin">Payment</h3>
              <p className="text-white text-[8px] font-thin">
                Finish your order & choose your payment
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full mt-6 space-x-4">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col">
          <CheckoutFormComponent />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col">
          <DetailProductComponent
            cart={cart}
            subtotal={subtotal}
            deliveryAmount={deliveryAmount}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

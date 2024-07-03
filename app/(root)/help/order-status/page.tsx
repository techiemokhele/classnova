"use client";

import { CustomButtonComponent, CustomTextInputComponent } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";

const OrdersPage = () => {
  const router = useRouter();

  const [orderNumber, setOrderNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-16 pb-6 container">
      <p className="text-white text-2xl font-bold">View/Manage Your Order</p>
      <p className="text-white text-[12px] text-center font-thin pb-10">
        Please enter your order number and email address to check the status of
        your order or to initiate a return.
      </p>

      <div className="flex flex-col container mx-auto space-y-4">
        <CustomTextInputComponent
          type="text"
          value={orderNumber}
          placeholder=""
          onChange={(text) => setOrderNumber(text)}
          label="Order number"
        />

        <CustomTextInputComponent
          type="email"
          value={email}
          placeholder="example@company.com"
          onChange={(text) => setEmail(text)}
          label="Email address"
        />

        <CustomButtonComponent
          onClick={() => router.push("/help/order-status/my-orders")}
          text="Submit"
        />
      </div>
    </div>
  );
};

export default OrdersPage;

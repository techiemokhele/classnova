"use client";

import React, { useState } from "react";
import CustomTextInputComponent from "@/components/common/CustomTextInputComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import Image from "next/image";

const PaymentFormComponent = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    const paymentData = {
      cardNumber,
      expiryDate,
      cvv,
    };
    console.log("Payment data: ", paymentData);

    // Add payment processing logic here
  };

  return (
    <div className="p-4 flex flex-col bg-gray-800 rounded-xl">
      <h1 className="text-2xl text-white font-semibold pb-6">Payment</h1>

      <CustomTextInputComponent
        type="text"
        value={cardNumber}
        onChange={(text) => setCardNumber(text)}
        placeholder="Card Number"
        label="Card Number"
      />

      <div className="flex flex-row justify-between space-x-4 pt-4 pb-6">
        <CustomTextInputComponent
          type="text"
          value={expiryDate}
          onChange={(text) => setExpiryDate(text)}
          placeholder="MM/YY"
          label="Expiry Date"
        />
        <CustomTextInputComponent
          type="text"
          value={cvv}
          onChange={(text) => setCvv(text)}
          placeholder="CVV"
          label="CVV"
        />
      </div>

      <CustomButtonComponent text="Pay Now" onClick={handlePayment} />

      <Image
        priority
        src={"/images/web/shop/payment.png"}
        alt="payment-icons"
        width={1300}
        height={1300}
        className="w-full h-[40px] object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
    </div>
  );
};

export default PaymentFormComponent;

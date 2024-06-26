"use client";

import CustomTextInputComponent from "@/components/common/CustomTextInputComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import { useState } from "react";

const CheckoutFormComponent = ({ onContinueToPayment }) => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [town, setTown] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [shippingMethod, setShippingMethod] = useState<string>("");

  const handleToPayment = () => {
    const data = {
      email,
      firstName,
      lastName,
      country,
      address,
      town,
      province,
      postCode,
      shippingMethod,
    };

    console.log("captured data: ", data);

    // Call the parent function to go to payment step
    onContinueToPayment();
  };

  return (
    <div className="p-4 flex flex-col bg-gray-800 rounded-xl">
      <div className="pb-6">
        <h1 className="text-2xl text-white font-semibold pb-6">Contact</h1>

        <CustomTextInputComponent
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
          placeholder="username@company.com"
          label="Email address"
        />
      </div>

      {/* form section */}
      <div className="pb-6">
        <h1 className="text-2xl text-white font-semibold pb-6">
          Delivery Address
        </h1>

        <div className="flex flex-row justify-between space-x-4 pb-4">
          <CustomTextInputComponent
            type="text"
            value={firstName}
            onChange={(text) => setFirstName(text)}
            placeholder="John"
            label="First name"
          />
          <CustomTextInputComponent
            type="text"
            value={lastName}
            onChange={(text) => setLastName(text)}
            placeholder="Doe"
            label="Last name"
          />
        </div>

        <div className="pb-4">
          <CustomTextInputComponent
            type="text"
            value={country}
            onChange={(text) => setCountry(text)}
            placeholder="South Africa"
            label="Country"
          />
        </div>

        <div className="pb-4">
          <CustomTextInputComponent
            type="text"
            value={address}
            onChange={(text) => setAddress(text)}
            placeholder="55 Street Avenue"
            label="Address"
          />
        </div>

        <div className="flex flex-row justify-between space-x-4 pb-4">
          <CustomTextInputComponent
            type="text"
            value={town}
            onChange={(text) => setTown(text)}
            placeholder="Midrand"
            label="Town"
          />

          <CustomTextInputComponent
            type="text"
            value={province}
            onChange={(text) => setProvince(text)}
            placeholder="GP"
            label="Province"
          />

          <CustomTextInputComponent
            type="tel"
            value={postCode}
            onChange={(text) => setPostCode(text)}
            placeholder="1678"
            label="Postcode"
          />
        </div>
      </div>

      {/* shipping section */}
      <div className="pb-2">
        <h1 className="text-2xl text-white font-semibold pb-6">
          Shipping Method
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row jusitfy-between items-center">
            <div className="w-1/2 flex flex-col items-start">
              <h1 className="text-white text-[20px] font-semibold">
                Transit Team
              </h1>
              <p className="text-white text-[8px] font-thin">
                Your shipment will arrive within 2-3 days
              </p>
            </div>
            <div className="w-1/2 flex flex-row space-x-2 justify-end">
              <p className="text-white text-[10px] font-thin">R20.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow border-t border-gray-400 flex my-4"></div>

      <CustomButtonComponent
        text="Continue to payment"
        onClick={handleToPayment}
      />
    </div>
  );
};

export default CheckoutFormComponent;

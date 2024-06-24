"use client";

import CustomTextInputComponent from "@/components/common/CustomTextInputComponent";
import CustomButtonComponent from "@/components/common/CustomButtonComponent";
import { useState } from "react";

const CheckoutFormComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<string>("");
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
      rememberMe,
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
            placeholder="example"
            label="First name"
          />
          <CustomTextInputComponent
            type="text"
            value={lastName}
            onChange={(text) => setLastName(text)}
            placeholder="example"
            label="Last name"
          />
        </div>

        <div className="pb-4">
          <CustomTextInputComponent
            type="text"
            value={country}
            onChange={(text) => setCountry(text)}
            placeholder="example"
            label="Country"
          />
        </div>

        <div className="pb-4">
          <CustomTextInputComponent
            type="text"
            value={address}
            onChange={(text) => setAddress(text)}
            placeholder="example"
            label="Address"
          />
        </div>

        <div className="flex flex-row justify-between space-x-4 pb-4">
          <CustomTextInputComponent
            type="text"
            value={town}
            onChange={(text) => setTown(text)}
            placeholder="example"
            label="Town"
          />

          <CustomTextInputComponent
            type="text"
            value={province}
            onChange={(text) => setProvince(text)}
            placeholder="example"
            label="Province"
          />

          <CustomTextInputComponent
            type="text"
            value={postCode}
            onChange={(text) => setPostCode(text)}
            placeholder="example"
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

          <div className="flex flex-row jusitfy-between items-center">
            <div className="w-1/2 flex flex-col items-start">
              <h1 className="text-white text-[20px] font-semibold">
                Express Transit
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

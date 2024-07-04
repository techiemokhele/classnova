"use client";

import { useState } from "react";

const ProductDescriptionComponent = () => {
  const [descriptionActive, setDescriptionActive] = useState(true);
  const [shippingActive, setShippingActive] = useState(false);

  const handleDescriptionClick = () => {
    setDescriptionActive(true);
    setShippingActive(false);
  };

  const handleShippingClick = () => {
    setDescriptionActive(false);
    setShippingActive(true);
  };

  return (
    <div className="flex flex-col w-full py-8 space-y-4">
      <div className="flex flex-row space-x-4 ">
        <h4
          className={`text-lg uppercase cursor-pointer ${
            descriptionActive
              ? "text-teal-500 font-bold "
              : "text-white font-thin"
          }`}
          onClick={handleDescriptionClick}
        >
          Description
        </h4>
        <h4 className="text-white">|</h4>
        <h4
          className={`text-lg uppercase cursor-pointer ${
            shippingActive
              ? "text-teal-500 font-bold "
              : "text-white  font-thin"
          }`}
          onClick={handleShippingClick}
        >
          Shipping
        </h4>
      </div>

      <div className="flex flex-col space-y-2">
        {descriptionActive && (
          <p className="text-white text-[12px] font-thin">
            Your ultimate destination for quality and style. Each product in our
            collection is carefully curated to ensure exceptional craftsmanship
            and innovative design. From elegant apparel to cutting-edge
            electronics, we offer a diverse range of items to suit every taste
            and need. Our commitment to sustainability means you can shop with
            confidence, knowing that our products are both stylish and
            environmentally friendly. Experience the perfect blend of luxury and
            functionality with Spendio. Elevate your lifestyle and discover the
            difference with our premium offerings. Shop now and join the Spendio
            community for exclusive deals and updates.
          </p>
        )}

        {shippingActive && (
          <p className="text-white text-[12px] font-thin">
            We prioritise getting your purchases to you swiftly and securely. We
            offer multiple shipping methods to suit your needs, including
            standard, expedited, and express shipping. Standard shipping is
            economical and reliable, typically delivering within 5-7 business
            days. For those who need their items sooner, our expedited shipping
            option reduces delivery time to 2-3 business days. For urgent needs,
            our express shipping ensures delivery within 1-2 business days. We
            also provide tracking on all orders, so you can stay updated on your
            shipment's progress. Your satisfaction is our priority, and we
            strive to provide a seamless delivery experience.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDescriptionComponent;

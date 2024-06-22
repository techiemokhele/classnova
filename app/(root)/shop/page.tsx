"use client";

import { ShopImageSliderComponent } from "@/components";

const ShopHomePage = () => {
  const handleShowSliderImages = () => {
    console.log("handleShowSliderImages");
  };

  return (
    <div className="flex flex-col pt-16 pb-6">
      <ShopImageSliderComponent onClick={handleShowSliderImages} />
    </div>
  );
};

export default ShopHomePage;

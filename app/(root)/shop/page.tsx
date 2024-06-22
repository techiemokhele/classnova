"use client";

import { OrSeparatorComponent, ShopImageSliderComponent } from "@/components";

const ShopHomePage = () => {
  const handleShowSliderImages = () => {
    console.log("handleShowSliderImages");
  };

  return (
    <div className="flex flex-col pt-16 pb-6">
      <ShopImageSliderComponent onClick={handleShowSliderImages} />

      <OrSeparatorComponent text="Trending this Week" bigText={true} />

      <OrSeparatorComponent text="Shop by Category" bigText={true} />

      <OrSeparatorComponent text="Explore More" bigText={true} />

        <OrSeparatorComponent text="Memebership Specials" bigText={true} />
    </div>
  );
};

export default ShopHomePage;

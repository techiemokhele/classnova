"use client";

import {
  OrSeparatorComponent,
  ProductTrendingSliderComponent,
  ShopImageSliderComponent,
} from "@/components";

const ShopHomePage = () => {
  const handleShowSliderImages = () => {
    console.log("handleShowSliderImages");
  };

  return (
    <div className="flex flex-col pt-16 pb-6">
      <ShopImageSliderComponent onClick={handleShowSliderImages} />

      <OrSeparatorComponent text="Trending this Week" bigText={true} />

      <ProductTrendingSliderComponent itemNumber={3} />

      <OrSeparatorComponent text="Shop by Category" bigText={true} />

      <ProductTrendingSliderComponent itemNumber={6} filterByCategory={true} />

      <OrSeparatorComponent text="Buyers All Time Products" bigText={true} />

      <ProductTrendingSliderComponent itemNumber={9} ratingFilter={true} />
    </div>
  );
};

export default ShopHomePage;

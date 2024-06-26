"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import {
  OrSeparatorComponent,
  ProductCardComponent,
  ShopAdBannerComponent,
  ShopImageSliderComponent,
} from "@/components/";

import productData from "../../../assets/app/TrendingProducts.json";
import { generateSlug } from "@/libs/utils";

const products: Product[] = productData.map((product) => ({
  ...product,
  slug: generateSlug(product.productName),
}));

const ShopHomePage = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const router = useRouter();

  const handleFilteredProducts = (filtered: Product[]) => {
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-col pt-16 pb-6">
      <ShopImageSliderComponent />

      <OrSeparatorComponent text="Trending this Week" bigText={true} />
      <ProductCardComponent
        products={products
          .filter(
            (product) => product.newArrival && product.productReviews > 20
          )
          .reverse()}
        itemNumber={6}
      />
      <OrSeparatorComponent text="Shop by Category" bigText={true} />
      {/*shop banner*/}
      <ShopAdBannerComponent
        discountText="Welcome20"
        extraText="Get 20% off using this promo code"
        bannerImage={
          "https://images.unsplash.com/photo-1664262283662-40cc80a2cb6e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjB0ZWFsfGVufDB8fDB8fHww"
        }
        otherLayout={false}
        bigBanner
      />

      <ProductCardComponent
        products={products.filter((product) => product.productRating >= 4)}
        itemNumber={6}
      />

      <OrSeparatorComponent text="Buyers All Time Products" bigText={true} />
      <ProductCardComponent
        products={products
          .filter(
            (product) =>
              product.productRating > 4.5 && product.productReviews > 100
          )
          .reverse()}
        itemNumber={6}
      />
    </div>
  );
};

export default ShopHomePage;

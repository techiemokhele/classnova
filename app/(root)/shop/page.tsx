"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types";
import {
  OrSeparatorComponent,
  ProductCardComponent,
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
      <ProductCardComponent products={products} itemNumber={6} />

      <OrSeparatorComponent text="Shop by Category" bigText={true} />
      <ProductCardComponent
        products={products.filter(
          (product) =>
            product.productCategory === "clothing" ||
            product.productCategory === "gadget" ||
            product.productCategory === "jewellery" ||
            product.productCategory === "food" ||
            product.productCategory === "hardware" ||
            product.productCategory === "cosmetics"
        )}
        itemNumber={6}
      />

      <OrSeparatorComponent text="Buyers All Time Products" bigText={true} />
      <ProductCardComponent
        products={products.filter((product) => product.productRating > 4.5)}
        itemNumber={6}
      />
    </div>
  );
};

export default ShopHomePage;

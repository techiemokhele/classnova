"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

import { useCart } from "@/context/CartContext";
import { Product, ProductItemProp } from "@/types";
import productData from "../../../assets/app/TrendingProducts.json";

import { CustomButtonComponent } from "@/components";
import { formatDecimalNumber } from "@/libs/utils";

const products: Product[] = productData;

const ProductTrendingSliderComponent = ({
  itemNumber,
  filterByCategory,
  ratingFilter,
}: ProductItemProp) => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    let filtered = products;

    if (ratingFilter) {
      filtered = filtered.filter((product) => product.productRating > 4.5);
    }

    if (filterByCategory) {
      const categories = Array.from(
        new Set(filtered.map((product) => product.productCategory))
      );
      filtered = categories.map(
        (category) =>
          filtered.find(
            (product) => product.productCategory === category
          ) as Product
      );
    }

    // Additional filter criteria
    if (filter) {
      filtered = filtered.filter((product) => product[filter as keyof Product]);
    }

    setFilteredProducts(filtered);
  }, [filter, filterByCategory, ratingFilter]);

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      productName: product.productName,
      productImage: product.productImage,
      productDescription: product.productDescription,
      productSku: product.productSku,
      productCategory: product.productCategory,
      productPrice: product.productPrice,
      newArrival: product.newArrival,
      bestSeller: product.bestSeller,
      topProduct: product.topProduct,
      discount: product.discount,
      productRating: product.productRating,
      quantity: 1,
    });
  };

  return (
    <div className="flex flex-col w-full mx-auto container">
      {!filterByCategory && !ratingFilter && (
        <div className="flex flex-row justify-between">
          <p
            className={`font-medium cursor-pointer ${
              filter === "topProduct"
                ? "text-md text-white"
                : "text-sm text-gray-600"
            }`}
            onClick={() => setFilter("topProduct")}
          >
            👔 Top Products
            {filter === "topProduct" && (
              <span className="flex justify-center items-center pt-4">
                <p className="text-[10px] text-white font-medium">View all</p>
              </span>
            )}
          </p>
          <p
            className={`font-medium cursor-pointer ${
              filter === "newArrival"
                ? "text-md text-white"
                : "text-sm text-gray-600"
            }`}
            onClick={() => setFilter("newArrival")}
          >
            🔥 New Arrivals
            {filter === "newArrival" && (
              <span className="flex justify-center items-center pt-4">
                <p className="text-[10px] text-white font-medium">View all</p>
              </span>
            )}
          </p>
          <p
            className={`font-medium cursor-pointer ${
              filter === "bestSeller"
                ? "text-md text-white"
                : "text-sm text-gray-600"
            }`}
            onClick={() => setFilter("bestSeller")}
          >
            😍 Best Seller
            {filter === "bestSeller" && (
              <span className="flex justify-center items-center pt-4">
                <p className="text-[10px] text-white font-medium">View all</p>
              </span>
            )}
          </p>
        </div>
      )}

      {filter === "topProduct" ||
      filter === "newArrival" ||
      filter === "bestSeller" ? null : ratingFilter || filterByCategory ? (
        <div className="flex justify-start items-start mx-auto container">
          <p className="text-[10px] text-white font-medium">View all</p>
        </div>
      ) : null}

      <div className="flex flex-wrap mt-6">
        {filteredProducts.slice(0, itemNumber).map((product) => (
          <div
            key={product.id}
            className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 hover:transform hover:transition-transform hover:duration-300 hover:scale-11"
          >
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md pb-2">
              <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-64">
                <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-semibold rounded z-10 uppercase">
                  {product.productCategory}
                </div>
                <Image
                  src={product.productImage}
                  alt="product-image"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-lg font-semibold text-white">
                  {product.productName}
                </p>
                <p className="text-[10px] font-thin text-white">
                  {product.productDescription}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-md text-white text-[14px]">
                    R{formatDecimalNumber(product.productPrice)}
                  </p>
                  <CustomButtonComponent
                    icon={<BsCart4 className="h-4 w-4" />}
                    text="Add to cart"
                    onClick={() => handleAddToCart(product)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filter === "topProduct" ||
      filter === "newArrival" ||
      filter === "bestSeller" ? null : ratingFilter || filterByCategory ? (
        <div className="flex justify-end items-end mx-auto container">
          <p className="text-[10px] text-white font-medium">View all</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProductTrendingSliderComponent;

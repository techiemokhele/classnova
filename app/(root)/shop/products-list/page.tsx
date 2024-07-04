"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import productData from "../../../../assets/app/TrendingProducts.json";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { generateSlug, formatDecimalNumber } from "@/libs/utils";
import {
  NoResultsFoundComponent,
  CustomButtonComponent,
  CustomTextInputComponent,
  ShopAdBannerComponent,
} from "@/components";

const productsData: Product[] = productData.map((product) => ({
  ...product,
  slug: generateSlug(product.productName),
}));

const ITEMS_PER_PAGE = 24;

const ProductListPage = () => {
  const router = useRouter();
  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string | null>(null);

  const uniqueCategories = Array.from(
    new Set(productsData.map((product) => product.productCategory))
  );

  const sortProducts = (products: Product[]) => {
    if (!sortOption) return products;

    return [...products].sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return a.productPrice - b.productPrice;
        case "price-desc":
          return b.productPrice - a.productPrice;
        case "a-z":
          return a.productName.localeCompare(b.productName);
        case "z-a":
          return b.productName.localeCompare(a.productName);
        default:
          return 0;
      }
    });
  };

  const filteredProducts = sortProducts(
    productsData
      .filter((product) =>
        selectedCategory ? product.productCategory === selectedCategory : true
      )
      .filter(
        (product) =>
          product.productName
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.productDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
  );
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const products = filteredProducts.slice(startIndex, endIndex);

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
      slug: product.slug || generateSlug(product.productName),
    });
  };

  const navigateToProductDetail = (slug: string) => {
    router.push(`/shop/product/${slug}`);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterProductsByCategory = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const showAllProducts = () => {
    setSelectedCategory(null);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
    setCurrentPage(1);
  };

  const handleButtonClick = () => {
    router.push("/shop");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, []);

  return (
    <div className="pt-20 pb-6">
      {/*shop banner*/}
      <ShopAdBannerComponent
        discountText="Welcome20"
        extraText="Get 20% off using this promo code"
        bannerImage={"/images/web/promoBanner.jpg"}
        otherLayout={true}
      />

      {/* search and sort section */}
      <div className="flex flex-row w-full justify-between pt-4 container mx-auto">
        <div className="w-1/2 justify-start">
          <div className="flex flex-wrap justify-center pt-6 space-y-1">
            <button
              key="all"
              className={`mx-1 px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                selectedCategory === null
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
              onClick={showAllProducts}
            >
              All
            </button>
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                className={`mx-1 px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                  category === selectedCategory
                    ? "bg-teal-500 text-white"
                    : "bg-gray-800 text-white"
                } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
                onClick={() => filterProductsByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-1/2 justify-center items-center">
          <div className="w-full pb-2">
            <CustomTextInputComponent
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(text) => setSearchQuery(text)}
            />
          </div>

          {/* sort (price and a - z)*/}
          <div className="space-x-1 md:space-x-4 lg:space-x-4">
            <button
              onClick={() => handleSort("price-asc")}
              className={`px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                sortOption === "price-asc"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
            >
              Price ↑
            </button>

            <button
              onClick={() => handleSort("price-desc")}
              className={`px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                sortOption === "price-desc"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
            >
              Price ↓
            </button>

            <button
              onClick={() => handleSort("a-z")}
              className={`px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                sortOption === "a-z"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
            >
              a-Z
            </button>

            <button
              onClick={() => handleSort("z-a")}
              className={`px-2 py-1 rounded-md text-[8px] md:text-[12px] lg:text-[12px] font-thin ${
                sortOption === "z-a"
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
              } hover:bg-gray-700 focus:outline-none focus:bg-teal-700`}
            >
              Z-a
            </button>
          </div>
        </div>
      </div>

      {/* items list section*/}
      <div className="flex flex-wrap mt-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 sm:p-3 md:p-4"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md pb-2 hover:shadow-l hover:shadow-teal-500 transform transition-transform duration-300 hover:scale-110">
                <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-56">
                  <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-semibold rounded z-10">
                    {product.productCategory}
                  </div>
                  <Image
                    src={product.productImage}
                    alt="product-image"
                    width={1300}
                    height={1300}
                    quality={100}
                    className="w-full h-full object-cover"
                    priority
                    onClick={() =>
                      product.slug && navigateToProductDetail(product.slug)
                    }
                  />
                </div>

                <div className="p-2 sm:p-3 md:p-4">
                  <p className="text-[14px] text-white pb-1">
                    R{formatDecimalNumber(product.productPrice)}
                  </p>
                  <p
                    className="text-sm sm:text-base md:text-lg font-semibold text-white cursor-pointer truncate"
                    onClick={() =>
                      product.slug && navigateToProductDetail(product.slug)
                    }
                  >
                    {product.productName}
                  </p>
                  <p className="text-[10px] md:text-[12px] font-thin text-white line-clamp-1">
                    {product.productDescription}
                  </p>
                  <div className="flex mt-3 sm:mt-3 md:mt-4">
                    <CustomButtonComponent
                      text="Add to Cart"
                      onClick={() => handleAddToCart(product)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoResultsFoundComponent
            button
            onClick={handleButtonClick}
            title="No Products Found"
            message="Shop for products and add them to your cart to see them appear here"
          />
        )}
      </div>

      {/* pagination section*/}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md text-white ${
                currentPage === index + 1 ? "bg-teal-500" : "bg-gray-800"
              } hover:bg-gray-700 focus:outline-none focus:bg-gray-700`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;

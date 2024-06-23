"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import productData from "../../../../assets/app/TrendingProducts.json";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { generateSlug, formatDecimalNumber } from "@/libs/utils";
import { NoResultsFoundComponent, CustomButtonComponent } from "@/components";

const productsData: Product[] = productData.map((product) => ({
  ...product,
  slug: generateSlug(product.productName),
}));

const ITEMS_PER_PAGE = 24;

const ProductListPage = () => {
  const router = useRouter();
  const { addToCart } = useCart();

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const products = productsData.slice(startIndex, endIndex);

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

  const handleButtonClick = () => {
    router.push("/shop");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="container mx-auto pt-16 pb-6">
      <div className="flex flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md pb-2">
                <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-64">
                  <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs font-semibold rounded z-10 uppercase">
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
                  />
                </div>

                <div className="p-4">
                  <p
                    className="text-lg font-semibold text-white cursor-pointer"
                    onClick={() =>
                      product.slug && navigateToProductDetail(product.slug)
                    }
                  >
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-teal-500 text-white"
                  : "bg-gray-800 text-white"
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

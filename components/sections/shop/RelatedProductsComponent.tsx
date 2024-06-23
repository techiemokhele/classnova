"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

import { useProductContext } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { StarRatingComponent, CustomButtonComponent } from "@/components";
import { formatDecimalNumber } from "@/libs/utils";
import { useRouter } from "next/navigation";

interface RelatedProductsProps {
  currentProduct: Product;
  text: string;
  filterType: "rating" | "category-rating";
}

const RelatedProductsComponent = ({
  currentProduct,
  text,
  filterType,
}: RelatedProductsProps) => {
  const router = useRouter();
  const { products } = useProductContext();
  const { addToCart } = useCart();
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filteredProducts: Product[] = [];
    if (filterType === "category-rating") {
      filteredProducts = products.filter(
        (product) =>
          product.id !== currentProduct.id &&
          product.productCategory === currentProduct.productCategory &&
          product.productRating === currentProduct.productRating
      );
    } else if (filterType === "rating") {
      filteredProducts = products.filter(
        (product) =>
          product.id !== currentProduct.id &&
          product.productRating === currentProduct.productRating &&
          product.productCategory !== currentProduct.productCategory
      );
    }
    setRelatedProducts(filteredProducts);
  }, [currentProduct, products, filterType]);

  if (relatedProducts.length === 0) return null;

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  const navigateToProductDetail = (slug: string) => {
    router.push(`/shop/product/${slug}`);
  };

  return (
    <div className="mt-4 w-full">
      <h2 className="text-2xl text-white font-bold mb-2">{text}</h2>
      <div className="flex flex-wrap ">
        {relatedProducts.slice(0, 6).map((product, index) => (
          <div
            key={product.id}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-2 ${
              index >= 6 ? "hidden" : ""
            }`}
          >
            <div className="bg-gray-800 rounded-xl p-4">
              <Image
                src={product.productImage}
                alt={product.productName}
                width={500}
                height={500}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h3
                onClick={() =>
                  product.slug && navigateToProductDetail(product.slug)
                }
                className="text-xl text-white font-semibold mt-4 cursor-pointer"
              >
                {product.productName}
              </h3>
              <StarRatingComponent rating={product.productRating} />
              <p className="text-teal-500 text-lg font-bold my-2">
                R{formatDecimalNumber(product.productPrice)}
              </p>
              <CustomButtonComponent
                icon={<BsCart4 className="h-5 w-5" />}
                text="Add to cart"
                onClick={() => handleAddToCart(product)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsComponent;

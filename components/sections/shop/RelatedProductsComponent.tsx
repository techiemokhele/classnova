"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

import { useProductContext } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { Product, CartItem } from "@/types";
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
    const cartItem: CartItem = { ...product, quantity: 1 };
    addToCart(cartItem);
  };

  const navigateToProductDetail = (slug: string) => {
    router.push(`/shop/product/${slug}`);
  };

  return (
    <div className="w-full">
      <div className="flex-grow border-t border-gray-400 flex my-4"></div>

      <h2 className="text-2xl text-white font-bold my-2">{text}</h2>
      <div className="flex flex-wrap">
        {relatedProducts.slice(0, 3).map((product, index) => (
          <div
            key={product.id}
            className="flex flex-col w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 sm:p-3 md:p-4"
          >
            <div className="bg-gray-800 rounded-xl pb-4 p-0">
              <Image
                onClick={() =>
                  product.slug && navigateToProductDetail(product.slug)
                }
                src={product.productImage}
                alt={product.productName}
                width={1000}
                height={1000}
                className="w-full h-[180px] object-cover rounded-md pb-2 px-0 cursor-pointer"
              />

              <div className="flex flex-col mb-2 px-2">
                <p className="text-white text-[12px] font-bold pb-2">
                  R{formatDecimalNumber(product.productPrice)}
                </p>
                <StarRatingComponent rating={product.productRating} />
              </div>

              <h3
                onClick={() =>
                  product.slug && navigateToProductDetail(product.slug)
                }
                className="text-md text-white font-semibold cursor-pointer px-2"
              >
                {product.productName}
              </h3>

              <p className="text-white text-xs font-thin px-2 line-clamp-1">
                {product.productDescription}
              </p>

              <div className="flex flex-row w-full pt-4 px-2">
                <CustomButtonComponent
                  icon={<BsCart4 className="h-5 w-5" />}
                  text="Add to cart"
                  onClick={() => handleAddToCart(product)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProductsComponent;

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";

import { useProductContext } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import {
  NoResultsFoundComponent,
  StarRatingComponent,
  CustomButtonComponent,
  ProductDescriptionComponent,
  RelatedProductsComponent,
  ShopAdBannerComponent,
} from "@/components";
import { formatDecimalNumber } from "@/libs/utils";

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const { products } = useProductContext();
  const { addToCart } = useCart();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (params.slug) {
      const foundProduct = products.find((prod) => prod.slug === params.slug);
      setProduct(foundProduct || null);
    }
  }, [params.slug, products]);

  if (!product) {
    return (
      <NoResultsFoundComponent
        button
        onClick={() => router.push("/shop")}
        title="Product Not Found"
        message="The requested product does not exist."
      />
    );
  }

  const handleAddToCart = () => {
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
      slug: product.slug,
    });
  };

  const gotoCart = () => {
    router.push("/shop/cart");
  };

  return (
    <div className="container mx-auto pt-20 pb-6 flex flex-col  w-full">
      <ShopAdBannerComponent
        discountText="Welcome20"
        extraText="Get 20% off using this promo code"
        bannerImage={
          "https://images.unsplash.com/photo-1664262283662-40cc80a2cb6e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjB0ZWFsfGVufDB8fDB8fHww"
        }
        otherLayout={false}
        bigBanner={false}
      />

      <div className="pt-6 flex flex-col md:flex-row lg:flex-row justify-between space-y-4 md:space-y-0 lg:space-y-0 space-x-0 md:space-x-4 lg:space-x-4">
        <div className="w-full md:w-1/2 lg:w-1/2 h-[300px]  md:h-[450px] lg:h-[450px] overflow-hidden">
          <Image
            priority
            src={product.productImage}
            alt={product.productName}
            width={1300}
            height={1300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 h-auto bg-gray-800 rounded-xl py-2 px-4">
          <h1 className="text-3xl text-white font-semibold">
            {product.productName}
          </h1>

          <div className="flex flex-row pt-2 pb-6 space-x-2">
            <StarRatingComponent rating={product.productRating} />
            <p className="text-white text-[10px] font-thin">
              ({formatDecimalNumber(product.productReviews)} user reviews)
            </p>
          </div>

          <div className="flex flex-row justify-between pb-4">
            <p className="text-teal-500 text-xl font-bold ">
              R{formatDecimalNumber(product.productPrice)}
            </p>

            <p className="text-white text-[10px] font-semibold px-2 rounded-none bg-teal-500 items-center flex uppercase">
              {product.productCategory}
            </p>
          </div>

          <p className="text-white text-[10px] font-thin pb-2">
            SKU: {product.productSku}
          </p>

          <p className="text-white text-l font-bold pb-2">
            {product.productDescription}
          </p>

          <p className="text-white text-[12px] font-thin">
            Culpa ex dolore incididunt nulla adipisicing in pariatur ea commodo
            non. Voluptate ut cillum aute aliquip anim mollit. Labore culpa
            veniam velit exercitation aliqua eu anim cupidatat ipsum fugiat amet
            sunt voluptate. Eiusmod duis velit fugiat irure nisi. Exercitation
            et anim voluptate do in occaecat dolore exercitation.
          </p>

          <div className="flex flex-row py-6 justify-between">
            <CustomButtonComponent
              icon={<BsCart4 className="h-5 w-5" />}
              text="Add to cart"
              onClick={handleAddToCart}
            />

            <CustomButtonComponent text="Go to cart" onClick={gotoCart} />
          </div>

          <div className="flex flex-col w-full h-[50px] justify-center items-center">
            <Image
              priority
              src={"/images/web/shop/payment.png"}
              alt="payment-icons"
              width={1300}
              height={1300}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      </div>

      <ProductDescriptionComponent />

      <RelatedProductsComponent
        currentProduct={product}
        text="Related Products"
        filterType="category-rating"
      />

      <RelatedProductsComponent
        currentProduct={product}
        text="Products you may like"
        filterType="rating"
      />
    </div>
  );
};

export default ProductDetailPage;

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { CustomButtonComponent } from "@/components";
import { formatDecimalNumber, generateSlug } from "@/libs/utils";

interface Props {
  products: Product[];
  itemNumber: number;
}

const ProductCardComponent = ({ products, itemNumber }: Props) => {
  const router = useRouter();
  const { addToCart } = useCart();

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
    router.push(`/shop/product/${encodeURIComponent(slug)}`);
  };

  return (
    <div className="flex flex-wrap mt-6">
      {products.slice(0, itemNumber).map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
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

            <div className="py-4 px-2">
              <p
                className="text-lg font-semibold text-white cursor-pointer"
                onClick={() =>
                  product.slug && navigateToProductDetail(product.slug)
                }
              >
                {product.newArrival && product.productReviews > 20
                  ? `🔥 ${product.productName}`
                  : product.productName}
              </p>
              <p className="text-[10px] font-thin text-white">
                {product.productDescription}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-[12px] text-white">
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
      ))}

      <div className="mx-auto container flex justify-end items-center pt-6">
        <button
          onClick={() => router.push("/shop/products-list")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
        >
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductCardComponent;

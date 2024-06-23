"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useProductContext } from "@/context/ProductContext";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";
import { NoResultsFoundComponent } from "@/components";

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

  return (
    <div className="container mx-auto pt-16 pb-6">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">

        <p className="text-lg font-semibold text-white">
          {product.productName}
        </p>
        <p className="text-[10px] font-thin text-white">
          {product.productDescription}
        </p>
        <p className="text-md text-white text-[14px]">
          R{product.productPrice.toFixed(2)}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add to Cart
        </button>

        <button
          onClick={() => router.back()}
          className="mt-2 ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import productData from "../assets/app/TrendingProducts.json";
import { Product } from "@/types";
import { generateSlug } from "@/libs/utils";

const ProductContext = createContext<{ products: Product[] }>({
  products: [],
});

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsWithSlugs = productData.map((product) => ({
      ...product,
      slug: generateSlug(product.productName),
    }));
    setProducts(productsWithSlugs);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

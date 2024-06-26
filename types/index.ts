import React, { ReactElement, ReactNode } from "react";

export interface BannerComponentProps {
  backgroundImage: string;
  logo?: string;
  title: string;
  buttonText?: string;
  buttonIcon?: React.ReactElement;
  description: string;
  onClick: () => void;
  otherLayout?: boolean;
}

export interface CustomButtonProps {
  icon?: React.ReactElement;
  onClick: () => void;
  text: string;
}

export interface SocialButtonProps {
  icon?: React.ReactElement;
  onClick: () => void;
  text: string;
}

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: "tel" | "password" | "text" | "email";
  label?: string | ReactElement;
  search?: boolean;
}

export interface StarRatingProps {
  rating: number | any;
}

export interface ModalComponentProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface Product {
  id: number;
  productImage: string;
  productName: string;
  productDescription: string;
  productSku: string;
  productCategory: string;
  productPrice: number;
  newArrival: boolean;
  bestSeller: boolean;
  topProduct: boolean;
  discount: number;
  productRating: number;
  productReviews: number;
  slug?: string;
}

export interface CartItem {
  id: number;
  productImage: string;
  productName: string;
  productDescription: string;
  productSku: string;
  productCategory: string;
  productPrice: number;
  newArrival: boolean;
  bestSeller: boolean;
  topProduct: boolean;
  discount: number;
  productRating: number;
  quantity: number;
  slug?: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
  getTotalQuantity: () => number;
}

export interface ProductItemProp {
  itemNumber: number;
  filterByCategory?: string;
  ratingFilter?: boolean;
  onFilterChange?: (filtered: Product[]) => void;
}

export interface DetailProductComponentProps {
  cart: CartItem[];
  subtotal: number;
  total: number;
  deliveryAmount: number;
}

export interface ShopBannerProps {
  discountText: string;
  extraText?: string;
  bannerImage: string;
  otherLayout: boolean;
  bigBanner?: boolean;
}

export interface ImageData {
  url: string;
  text: string;
  isVideo?: boolean;
  category: string;
}
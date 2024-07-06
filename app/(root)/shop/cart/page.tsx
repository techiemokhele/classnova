"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types";
import {
  CustomButtonComponent,
  NoResultsFoundComponent,
  ProductDescriptionComponent,
  ShopAdBannerComponent,
} from "@/components";
import { formatDecimalNumber } from "@/libs/utils";

const deliveryAmount = 20;

const CartPage = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(cart.length / itemsPerPage);

  const handleButtonClick = () => {
    router.push("/shop");
  };

  const navigateToProductDetail = (slug: string) => {
    router.push(`/shop/product/${slug}`);
  };

  if (cart.length === 0) {
    return (
      <NoResultsFoundComponent
        button
        onClick={handleButtonClick}
        title="No Products Found"
        message="Shop for products and add them to your cart to see them appear here"
      />
    );
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  let overallTotal = getTotal() + deliveryAmount;

  const handleCheckout = () => {
    const checkoutData = {
      cart,
      overallTotal,
    };

    sessionStorage.setItem("checkoutData", JSON.stringify(checkoutData));

    router.push("/shop/checkout");
  };

  return (
    <div className="container mx-auto pt-16 pb-6">
      <h1 className="text-3xl text-white font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-4 space-y-4 md:space-y-0 lg:space-y-0">
        {/* Product items Section */}
        <div className="w-full md:w-[70%] lg:w-[70%] flex flex-col bg-gray-600 rounded-md py-4 px-2">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col mb-4">
              <div className="flex flex-row justify-between">
                <div
                  onClick={() =>
                    item.slug && navigateToProductDetail(item.slug)
                  }
                >
                  <p className="text-white font-bold text-xl pb-2 cursor-pointer">
                    {item.productName}
                  </p>
                </div>

                <div>
                  <p className="text-white text-xs font-normal pb-2">
                    SKU: {item.productSku}
                  </p>
                  <p className="text-white font-normal text-xs">
                    {item.productCategory} category
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between w-full pt-4">
                <div className="w-[20%] justify-start items-center">
                  <Image
                    src={item.productImage}
                    alt={item.productName}
                    width={1000}
                    height={1000}
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>

                <div className="w-[78%] justify-start items-center px-2">
                  <p className="text-white text-xs font-semibold">
                    {item.productDescription}
                  </p>

                  <p className="text-white text-xs font-normal pt-2">
                    Enim exercitation pariatur dolor duis. Adipisicing anim duis
                    consectetur id. Duis nisi adipisicing ullamco exercitation
                    deserunt amet. Nostrud et proident enim exercitation duis.
                  </p>

                  <div className="flex flex-row justify-between pt-2">
                    <div className="flex justify-start items-center">
                      <p className="text-white font-bold text-xl pb-2">
                        R{formatDecimalNumber(item.productPrice)}
                      </p>
                    </div>

                    <div className="flex justify-betweent items-center">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-6 h-6 flex justify-center items-center bg-red-500 text-white rounded"
                      >
                        -
                      </button>
                      <p className="mx-2 text-white text-xs">{item.quantity}</p>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-6 h-6 flex justify-center items-center bg-green-500 text-white rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {cart.length > 1 && (
                <div className="flex-grow border-t border-gray-400 flex mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-[30%] lg:w-[30%] flex flex-col bg-gray-800 rounded-md py-4 px-4">
          <p className="text-white text-l font- pb-6">Order Summary</p>

          {cart.map((item) => (
            <div key={item.id} className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-xs font-normal">
                  {item.productName}
                </p>
              </div>
              <p className="text-white text-[12px] font-normal">
                R{formatDecimalNumber(item.productPrice)}
              </p>
            </div>
          ))}

          <div className="flex-grow border-t border-gray-400 my-4"></div>

          <div className="flex flex-row justify-between pb-2">
            <div className="flex items-center">
              <p className="text-white text-xs font-normal">Delivery free</p>
            </div>
            <p className="text-white text-[12px] font-normal">
              R{deliveryAmount}
            </p>
          </div>

          <div className="flex flex-col leading-none">
            <div className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-xs font-normal">Delivery via:</p>
              </div>
              <p className="text-white text-xs">Transit Team</p>
            </div>

            <div className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-xs font-normal">Delivery to</p>
              </div>
              <p className="text-white text-xs">Simphiwe Khumalo</p>
            </div>
          </div>

          <div className="flex-grow border-t border-gray-400 flex my-4"></div>

          <div className="flex flex-row justify-between pb-2">
            <div className="flex items-center">
              <p className="text-white text-xs font-bold">Amount</p>
            </div>
            <p className="text-white text-[12px] font-bold">
              R{formatDecimalNumber(overallTotal)}
            </p>
          </div>

          <Image
            priority
            src={"/images/web/shop/payment.png"}
            alt="payment-icons"
            width={1300}
            height={1300}
            className="w-full h-[px] object-contain"
          />

          <div className="flex justify-center items-center pt-2">
            <CustomButtonComponent
              text="Proceed to checkout"
              onClick={handleCheckout}
            />
          </div>
        </div>
      </div>

      <ProductDescriptionComponent />

      <ShopAdBannerComponent
        discountText="Welcome20"
        extraText="Get 20% off using this promo code"
        bannerImage={
          "https://images.unsplash.com/photo-1664262283662-40cc80a2cb6e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3QlMjB0ZWFsfGVufDB8fDB8fHww"
        }
        otherLayout={false}
        bigBanner={false}
      />
    </div>
  );
};

export default CartPage;

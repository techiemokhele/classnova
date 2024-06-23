"use client";

import { useCart, CartItem } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { NoResultsFoundComponent } from "@/components";
import { formatDecimalNumber } from "@/libs/utils";

const deliveryAmount = 20;

const CartPage = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart<CartItem>();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/shop");
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

  let overallTotal = getTotal() + deliveryAmount;

  return (
    <div className="container mx-auto pt-16 pb-6">
      <h1 className="text-2xl text-white font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col md:flex-row lg:flex-row justify-between space-x-0 md:space-x-4 lg:space-x-4 space-y-4 md:space-y-0 lg:space-y-0">
        {/* Product items Section */}
        <div className="w-full md:w-[70%] lg:w-[70%] flex flex-col bg-gray-600 rounded-md py-4 px-2">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col mb-4">
              <p className="text-white font-bold text-xl pb-2">
                {item.productName}
              </p>

              <div className="flex flex-row justify-between w-full pt-4 space-x-4">
                <div className="w-[20%] justify-start items-center">
                  <Image
                    src={item.productImage}
                    alt={item.productName}
                    width={1000}
                    height={1000}
                    className="w-[100px] h-[100px] object-cover"
                  />
                </div>

                <div className="w-[78%] justify-start items-center">
                  <p className="text-white text-[10px] font-semibold">
                    {item.productDescription}
                  </p>
                  <p className="text-white font-thin text-[10px]">
                    {item.productCategory} category
                  </p>
                  <p className="text-white text-[10px] font-thin pt-2">
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
                      <p className="mx-2 text-white text-[10px]">
                        {item.quantity}
                      </p>
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

              <div className="flex-grow border-t border-gray-400 flex mt-4"></div>
            </div>
          ))}
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-[30%] lg:w-[30%] min-h-[200px] flex flex-col bg-gray-800 rounded-md py-4 px-4">
          <p className="text-white text-l font- pb-6">Order Summary</p>

          {cart.map((item) => (
            <div key={item.id} className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-[10px] font-thin">
                  {item.productName}
                </p>
              </div>
              <p className="text-white text-[12px] font-thin">
                R{formatDecimalNumber(item.productPrice)}
              </p>
            </div>
          ))}

          <div className="flex-grow border-t border-gray-400 my-4"></div>

          <div className="flex flex-row justify-between pb-2">
            <div className="flex items-center">
              <p className="text-white text-[10px] font-thin">Delivery free</p>
            </div>
            <p className="text-white text-[12px] font-thin">
              R{deliveryAmount}
            </p>
          </div>

          <div className="flex flex-col leading-none">
            <div className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-[10px] font-thin">
                  Delivery via:
                </p>
              </div>
              <p className="text-white text-[10px]">Transit Team</p>
            </div>

            <div className="flex flex-row justify-between pb-2">
              <div className="flex items-center">
                <p className="text-white text-[10px] font-thin">Delivery to</p>
              </div>
              <p className="text-white text-[10px]">Simphiwe Khumalo</p>
            </div>
          </div>

          <div className="flex-grow border-t border-gray-400 flex my-4"></div>

          <div className="flex flex-row justify-between pb-2">
            <div className="flex items-center">
              <p className="text-white text-[10px] font-bold">Amount</p>
            </div>
            <p className="text-white text-[12px] font-bold">
              R{formatDecimalNumber(overallTotal)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

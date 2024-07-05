import React from "react";
import { formatDecimalNumber } from "@/libs/utils";
import { DetailProductComponentProps } from "@/types";

const DetailProductComponent = ({
  cart,
  subtotal,
  total,
  deliveryAmount,
}: DetailProductComponentProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl text-white font-bold">Detail Product</h1>

      <div className="flex flex-col space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between bg-gray-600 p-2"
          >
            <div className="flex-row w-1/2 space-y-2">
              <p className="text-white font-bold text-l">{item.productName}</p>
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-14 h-14 object-cover"
              />
            </div>

            <div className="flex flex-col items-end ">
              <p className="text-white text-xs font-normal">
                Qty: {item.quantity}
              </p>
              <p className="text-white text-l font-bold">
                R{formatDecimalNumber(item.productPrice * item.quantity)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-normal">Subtotal</h4>
          <p className="text-white text-s d font-bold">
            R{formatDecimalNumber(subtotal)}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-normal">Delivery Fee</h4>
          <p className="text-white text-s font-bold">
            R{formatDecimalNumber(deliveryAmount)}.00
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-normal">Total</h4>
          <p className="text-teal-500 text-s font-bold">
            R{formatDecimalNumber(total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductComponent;

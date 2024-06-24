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
              <p className="text-white font-bold text-xl">{item.productName}</p>
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-16 h-16 object-cover"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-white text-xl font-bold">
                R{formatDecimalNumber(item.productPrice * item.quantity)}
              </p>
              <p className="text-white text-[10px] font-thin">
                Qty: {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-thin">Subtotal</h4>
          <p className="text-white text-xl font-bold">
            R{formatDecimalNumber(subtotal)}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-thin">Delivery Fee</h4>
          <p className="text-white text-xl font-bold">
            R{formatDecimalNumber(deliveryAmount)}
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-white text-[12px] font-thin">Total</h4>
          <p className="text-white text-xl font-bold">
            R{formatDecimalNumber(total)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailProductComponent;

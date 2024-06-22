"use client";

import { useCart, CartItem } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart<CartItem>();
  const router = useRouter();

  if (cart.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div className="container mx-auto pt-16 pb-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-4">
            <Image
              src={item.productImage}
              alt={item.productName}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-cover"
            />
            <p>{item.productName}</p>
            <div className="flex items-center">
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                -
              </button>
              <p className="mx-2">{item.quantity}</p>
              <button
                onClick={() => addToCart(item)}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
            </div>
            <p>${item.productPrice}</p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-bold">Total: ${getTotal()}</h2>
        <button
          onClick={() => router.push("/shop/checkout")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

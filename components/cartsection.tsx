"use client";

import { useCart } from "@/cart-context";
import CartItem from "@/components/cartitem";
import Image from "next/image";
import CheckoutButton from "./checkoutButton";

export default function Cart() {
  const { cart } = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

  return (
    <main className="p-6 bg-white rounded-2xl shadow-lg  my-1 md:my-2 lg:my-[50px] mb-11 md:mb-0 min-h-[15rem]  w-[360px] overflow-y-auto flex flex-col">
      {/* Header */}
      <h2 className="text-2xl text-[#D62A15] font-bold mb-6 border-b pb-2">
        Your Cart ({cart.length})
      </h2>

      {/* Empty state */}
      {cart.length === 0 && (
        <>
        <Image
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
            width={100}
            height={100}
            className="mx-auto mb-2"
          />
        <p className="text-[#665e3f] text-center mt-2">
          
          Your added items will appear here.
        </p>
        </>
      )}

      {/* Cart items */}
      <div className="flex-1">
        {cart.map((item) => (
          <CartItem
            key={item.name}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        ))}
      </div>

      {/* Footer with totals */}
      {cart.length > 0 && (
  <div className="mt-6 border-t pt-4 sticky bottom-0 bg-white">
    <div className="flex justify-between items-center mb-3">
      <span className="font-medium text-gray-700 text-sm">Order Total:</span>
      <span className="font-bold text-lg text-[#D62A15]">${totalPrice}</span>
    </div>

    <div className="flex items-center gap-2 mb-4">
      <Image
        src="/assets/images/icon-carbon-neutral.svg"
        alt="Carbon Neutral"
        width={18}
        height={18}
      />
      <p className="text-gray-600 text-sm">
        This is a <span className="font-semibold">Carbon Neutral</span> Delivery
      </p>
    </div>

    <CheckoutButton />
  </div>
)}

    </main>
  );
}

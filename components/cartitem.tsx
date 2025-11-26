"use client";

import Image from "next/image";
import { useCart } from "@/cart-context";

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
}

export default function CartItem({ name, price, amount }: CartItemProps) {
  const { removeFromCart } = useCart();
  const formattedPrice = price.toFixed(2);
  const subTotal = (price * amount).toFixed(2);

  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* Product Info */}
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <div className="flex gap-3 text-gray-600 text-sm mt-1">
          <span className="text-[#D62A15]">{amount}x</span>
          <span>@ ${formattedPrice}</span>
          <span className="font-bold text-gray-900">${subTotal}</span>
        </div>
      </div>

      {/* Remove Button */}
      <button
  onClick={() => removeFromCart(name)}
  className="group w-6 h-6 border border-[#836a4b] hover:border-black rounded-full flex items-center justify-center hover:text-black transition-all"
>
  <Image
    src="/assets/images/icon-remove-item.svg"
    alt="Remove Item"
    width={14}
    height={14}
    className="transition-all group-hover:brightness-0 group-hover:saturate-100"
  />
</button>


    </div>
  );
}

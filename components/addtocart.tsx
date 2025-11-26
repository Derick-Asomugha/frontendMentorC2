"use client";

import Image from "next/image";
import { useCart } from "@/cart-context";
import { Product } from "@/libs/Product";

interface AddToCartProps {
  product: Product;
}

export default function AddToCart({ product }: AddToCartProps) {
  const { addToCart, increment, decrement, cart } = useCart();
  const existing = cart.find((item) => item.name === product.name);

  const handleAddToCart = () => {
    addToCart({
      name: product.name,
      price: product.price,
      image: product.image.thumbnail,
      amount: 1,
    });
  };

  return (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 bottom-[85px]
        w-32 sm:w-36 md:w-36 lg:w-36
      "
    >
      {!existing ? (
        <button
          onClick={handleAddToCart}
          className="
            w-full px-4 py-2
            sm:py-2.5
            rounded-full shadow-md flex items-center gap-2 justify-center
            text-xs sm:text-sm
            bg-white hover:bg-gray-100 hover:border-[#bc3321] hover:text-[#D62A15]
            text-black border-black border-[0.2px]
            transition-all
          "
        >
          <Image
            src="/assets/images/icon-add-to-cart.svg"
            alt="Cart Icon"
            width={15}
            height={15}
            className="sm:w-[16px] sm:h-[16px]"
          />
          Add To Cart
        </button>
      ) : (
        <div
          className="
            flex items-center justify-between
            w-full
            px-3 sm:px-3.5
            py-[6px] sm:py-[7px]
            bg-[#D62A15] rounded-full
            transition-all
          "
        >
          {/* Decrement */}
          <button
            onClick={() => decrement(product.name)}
            className="
              w-4 h-4 sm:w-4.5 sm:h-4.5
              hover:bg-[#bc3321]
              border border-white rounded-full flex items-center justify-center
              transition-all
            "
          >
            <Image
              src="/assets/images/icon-decrement-quantity.svg"
              width={6}
              height={6}
              alt=""
              className="sm:w-[6.5px] sm:h-[6.5px]"
            />
          </button>

          <span className="text-white font-semibold text-sm">
            {existing.amount}
          </span>

          {/* Increment */}
          <button
            onClick={() => increment(product.name)}
            className="
              w-4 h-4 sm:w-4.5 sm:h-4.5
              hover:bg-[#bc3321]
              border border-white rounded-full flex items-center justify-center
              transition-all
            "
          >
            <Image
              src="/assets/images/icon-increment-quantity.svg"
              width={6}
              height={6}
              alt=""
              className="sm:w-[6.5px] sm:h-[6.5px]"
            />
          </button>
        </div>
      )}
    </div>
  );
}

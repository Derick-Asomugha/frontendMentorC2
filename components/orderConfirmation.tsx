"use client";

import Image from "next/image";
import { useCart } from "@/cart-context";

interface OrderConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export default function OrderConfirmation({ open, onClose }: OrderConfirmationProps) {
  const { cart, clearCart } = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2);

    

  if (!open) return null;

  const handleStartNewOrder = () => {
    clearCart();    // Clears the cart
    onClose();      // Closes the modal
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl w-11/12 max-w-md p-6 flex flex-col animate-fadeIn scale-95 md:scale-100 transition-all">
        
        {/* Success Icon */}
        <div className="justify-start mb-6">
          <Image
            src="/assets/images/icon-order-confirmed.svg"
            alt="Order Confirmed"
            width={48}
            height={48}
          />
         
        </div>
         {/* Title */}
        <h2 className="text-2xl font-bold text-start text-black mb-2">Order Confirmed</h2>
        <p className="text-start text-gray-600 mb-6">We hope you enjoyed your food!</p>

        
        {/* Cart Items */}
        <div className="flex-1 max-h-64 overflow-y-auto mb-6 space-y-4 pr-2">
          {cart.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={item.image ? item.image.replace("./assets/images", "/assets/images") : "/assets/images/placeholder.png"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <div className="flex gap-2 text-gray-600">
                  <p className="text-sm text-[#D62A15]">x{item.amount}</p>
                  <p> @ ${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <p className="font-semibold text-gray-800">${(item.amount * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="flex justify-between items-center border-t border-gray-200 pt-4 mb-6">
          <span className="text-gray-700 font-medium">Total</span>
          <span className="text-black font-bold text-lg">${totalPrice}</span>
        </div>

        {/* Start New Order Button */}
        <button
          onClick={handleStartNewOrder}
          className="w-full bg-[#D62A15] hover:bg-[#bc3321] text-white py-3 rounded-xl font-semibold transition-colors shadow-md"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

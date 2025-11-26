import { useState } from "react";
import OrderConfirmation from "@/components/orderConfirmation";

export default function CheckoutButton() {
  const [openConfirm, setOpenConfirm] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenConfirm(true)}
        className="w-full bg-[#D62A15] text-white py-3 rounded-full font-semibold hover:bg-[#9b2212] transition-colors duration-200"
      >
        Checkout
      </button>

      {/* Modal */}
      <OrderConfirmation open={openConfirm} onClose={() => setOpenConfirm(false)} />
    </>
  );
}

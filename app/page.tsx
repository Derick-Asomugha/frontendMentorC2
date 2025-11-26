import ProductList from "@/components/productlist";
import Cart from "@/components/cartsection";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col lg:flex-row  max-h-full gap-2 md:gap-7 justify-center items-center lg:items-start  md:px-0 bg-[#F4EDEA] ">
        <div >
        <ProductList />
       </div>
        <div className="mb-11 lg:mb-20 ">
        <Cart />
      </div> 
      </div>
    </main>
  );
  }

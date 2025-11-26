import ProductCard from "@/components/productcard";
import products from "@/data.json";

export default function ProductList() {
  return (
    <main className="min-h-screen flex flex-col mb-2 md:mb-14  items-center justify-center text-start bg-[#F4EDEA]">
      {/* Heading aligned left */}
      <div>
      <div className="w-full max-w-6xl px-4">
        <h1 className="text-4xl font-bold my-8 text-left">Desserts</h1>
      </div>

      {/* Products grid */}
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      </div>
      <div>
        
      </div>
    </main>
  );
}

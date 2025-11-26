
import Image from "next/image";
import AddToCart from "./addtocart";
import { Product } from "@/libs/Product";



interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  // let quantity = {quantity};
  return (
    <div className="bg-[#F4EDEA] rounded-lg overflow-hidden relative">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full aspect-[4/3]">
         
    <picture>
  <source
    media="(min-width:1024px)"
    srcSet={product.image.desktop.replace("./assets/images", "/assets/images")}
  />
  <source
    media="(min-width:768px)"
    srcSet={product.image.tablet.replace("./assets/images", "/assets/images")}
  />
  <source
    media="(max-width:767px)"
    srcSet={product.image.mobile.replace("./assets/images", "/assets/images")}
  />
  <Image
    src={product.image.thumbnail.replace("./assets/images", "/assets/images")}
    alt={product.name}
    fill
    className="object-cover"
  />
</picture>
</div>
      <AddToCart product={product} />
    {/* PRODUCT DETAILS */}
      <div className="p-4 text-start">
        <p className="text-gray-500 text-xs">{product.category}</p>
        <h2 className="font-bold text-base">{product.name}</h2>
        <p className="mt-1 text-[#D62A15] font-semibold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}


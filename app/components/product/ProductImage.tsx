"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { Item, SingleProduct } from "@/utils/types";
import Image from "next/image";

interface ProductImageProps {
  product: SingleProduct;
  cartProduct: CartProductType;
  handleSelectColor: (image: string, color: string, price: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  product,
  cartProduct,
  handleSelectColor,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col gap-2 items-center justify-center border max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.items.map((item: Item) => {
          return (
            <div
              key={item.item_id}
              onClick={() =>
                handleSelectColor(item.image_url, item.color, item.price)
              }
              className={`relative w-[80%] aspect-square cursor-pointer rounded border-teal-300 ${
                item.image_url == cartProduct.selectedImage
                  ? "border-[1.5px]"
                  : "border-none"
              }`}
            >
              <Image
                src={item.image_url}
                alt={item.color}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image
          src={cartProduct.selectedImage}
          alt={cartProduct.name}
          fill
          className="w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]"
        />
      </div>
    </div>
  );
};

export default ProductImage;

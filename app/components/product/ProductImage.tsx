"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { Item, SingleProduct } from "@/utils/types";
import Image from "next/image";

interface ProductImageProps {
  product: SingleProduct;
  cartProduct: CartProductType;
  handleSelectColor: (
    image: string,
    color: string,
    price: number,
    discount: number,
    item_id: number,
    size_id: number | null
  ) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  product,
  cartProduct,
  handleSelectColor,
}) => {
  const Discount = (item: Item): number => {
    if (Array.isArray(item.sizes) && item.sizes.length > 0) {
      const discount: number = item.sizes[0].discount;
      return discount;
    } else if (item.discount !== undefined) {
      const discount: number = item.discount;
      return discount;
    } else {
      const discount: number = 0;
      return discount;
    }
  };

  const Size = (item: Item): number | null => {
    if (Array.isArray(item.sizes) && item.sizes.length > 0) {
      const size_id: number = item.sizes[0].id;
      return size_id;
    }

    return null;
  };

  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
      <div className="flex flex-col gap-2 items-center justify-center border max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        {product.items.map((item: Item) => {
          return (
            <div
              key={item.item_id}
              onClick={() =>
                handleSelectColor(
                  item.image_url,
                  item.color,
                  item.price,
                  Discount(item),
                  item.item_id,
                  Size(item)
                )
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

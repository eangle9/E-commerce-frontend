"use client";

// import { CartProductType } from "@/app/product/ProductDetail";
import { product } from "@/utils/product";
import { Item } from "@/utils/types";
import Image from "next/image";
import { CartProductType } from "../../product/[productId]/ProductDetail";

interface SetColorType {
  images: Item[];
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

const SetColor: React.FC<SetColorType> = ({
  images,
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
    <div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Color: {cartProduct.selectedColor}</div>
        <div className="flex items-center gap-4">
          {images.map((image) => {
            return (
              <div
                key={image.item_id}
                onClick={() =>
                  handleSelectColor(
                    image.image_url,
                    image.color,
                    image.price,
                    Discount(image),
                    image.item_id,
                    Size(image)
                  )
                }
                className={`w-18 h-18 border-teal-400 rounded-sm flex items-center justify-center ${
                  cartProduct.selectedImage === image.image_url
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  // style={{ background: image.colorCode }}
                  className="w-16 h-16 border-[1.5px] border-slate-300 rounded-sm cursor-pointer"
                >
                  <Image
                    src={image.color ? image.image_url : ""}
                    alt="selected_image"
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetColor;

"use client";

// import { CartProductType } from "@/app/product/ProductDetail";
import { product } from "@/utils/product";
import { Item } from "@/utils/types";
import Image from "next/image";
import { CartProductType } from "../../product/[productId]/ProductDetail";

interface SetColorType {
  images: Item[];
  cartProduct: CartProductType;
  handleSelectColor: (image: string, color:string, price:number) => void;
}

const SetColor: React.FC<SetColorType> = ({
  images,
  cartProduct,
  handleSelectColor,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="font-bold">Color: {cartProduct.selectedColor}</div>
        <div className="flex items-center gap-4">
          {images.map((image) => {
            return (
              <div
                key={image.item_id}
                onClick={() => handleSelectColor(image.image_url, image.color, image.price)}
                className={`w-18 h-18 border-teal-400 rounded-md flex items-center justify-center ${
                  cartProduct.selectedImage === image.image_url
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  // style={{ background: image.colorCode }}
                  className="w-16 h-16 border-[1.5px] border-slate-300 cursor-pointer"
                >
                  <Image src={image.color? image.image_url : ""} alt="selected_image" width={50} height={50} className="w-full h-full" />
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

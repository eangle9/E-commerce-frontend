"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { Item, ProductSize } from "@/utils/types";

interface SetSizeType {
  item: Item;
  cartProduct: CartProductType;
  handleSelectSize: (size: string, discount: number, price: number, size_id: number) => void;
}

const SetSize: React.FC<SetSizeType> = ({
  item,
  cartProduct,
  handleSelectSize,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="font-bold uppercase">
          Size: {cartProduct.selectedSize}
        </div>
        <div className="flex items-center gap-2">
          {item.sizes.map((size: ProductSize) => {
            return (
              <div
                key={size.id}
                onClick={() =>
                  handleSelectSize(size.size, size.discount, size.price, size.id)
                }
                className={`w-18 h-18 border-teal-400 rounded-sm flex items-center justify-center ${
                  cartProduct.selectedSize === size.size
                    ? "border-[1.5px]"
                    : "border-none"
                }`}
              >
                <div
                  // style={{ background: image.colorCode }}
                  className="px-4 uppercase font-bold border-[1.5px] border-slate-300 rounded-sm cursor-pointer"
                >
                  {size.size}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SetSize;

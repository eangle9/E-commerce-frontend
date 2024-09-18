"use client";
import { closeProductPopup } from "@/features/popup/productPopupSlice";
import { Product, Review } from "@/utils/types";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Rating } from "@mui/material";
import Button from "../Button";
import formatNumber from "@/utils/formatNumber";

interface PopupProps {
  product: Product | null;
}

const Popup: React.FC<PopupProps> = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  const handleClosePopup = () => {
    dispatch(closeProductPopup());
  };

  const productRating =
    product.reviews?.reduce(
      (acc: number, item: Review) => item.rating + acc,
      0
    ) / product.reviews?.length;

  return (
    <div
      className="fixed inset-0 top-0 left-0 flex items-center justify-center h-full w-full z-[100] bg-[#00000066]"
      onClick={handleClosePopup}
    >
      <div
        className="relative flex flex-col bg-white text-[#2B3445] max-w-[900px] w-full max-h-[90vh] m-8 rounded-lg shadow-xl overflow-y-auto py-5 px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full min-h-[445px] flex md:flex-row flex-col gap-2">
          <div className="md:w-1/2 w-full flex items-center">
            <Image
              src={product.product_items[0].image_url}
              alt={product.name}
              className="object-cover md:w-[414] w-full"
              width={414}
              height={400}
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center mt-6 ml-6">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-[#aeb4be] text-[13px] py-4 font-semibold">CATEGORY: {product.category}</p>
            <h1 className="text-[25px] text-[#d23f57] font-bold">{formatNumber(product.product_items[0].price)}</h1>
            <div className="flex items-center gap-1 text-sm mt-4">
              <Rating
                name="pdt-rating"
                value={productRating}
                precision={0.5}
                readOnly
                size="medium"
              />
              <span>({product.product_items.length})</span>
            </div>
            <p className="text-sm my-4">{product.description}</p>
            <hr className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#f3f5f9] mb-4"/>
            <div className="max-w-[200px]">
              <Button
                label="Add To Cart"
                onClick={() => {}}
                custom="rounded-[6px] h-[45px]"
              />
            </div>
          </div>
        </div>
        <button
          className="absolute top-[3px] right-[3px] text-[#0F3460] rounded-full p-2 size-9 flex items-center justify-center hover:bg-[#0000000a]"
          onClick={handleClosePopup}
        >
          <RxCross2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default Popup;

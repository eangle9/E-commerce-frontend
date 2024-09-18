"use client";

import { toggleProductPopup } from "@/features/popup/productPopupSlice";
import { RootState } from "@/redux/store";
import formatNumber from "@/utils/formatNumber";
import truncateText from "@/utils/truncateText";
import { Product, Review } from "@/utils/types";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { IoEye } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./popup";

interface ProductCardProps {
  data: Product;
  onEyeClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, onEyeClick }) => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const [isEyeClicked, setIsEyeClicked] = useState<Boolean>(false);
  const isVisible: Boolean = useSelector(
    (state: RootState) => state.productPopup.isVisible
  );

  const dispatch = useDispatch();

  const handleHeartClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  const handleEyeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEyeClicked((prev) => !prev);
    onEyeClick(data);
    dispatch(toggleProductPopup());
  };

  const discountPercentage = Math.round(
    Array.isArray(data.product_items[0].sizes) &&
      data.product_items[0].sizes.length > 0 &&
      data.product_items[0].discount != 0
      ? (data.product_items[0].sizes[0].price /
          data.product_items[0].sizes[0].discount) *
          100 -
          100
      : Array.isArray(data.product_items) &&
        data.product_items.length > 0 &&
        data.product_items[0].discount != 0
      ? (data.product_items[0].price / data.product_items[0].discount) * 100 -
        100
      : 0
  );

  const productRating =
    data.reviews?.reduce((acc: number, item: Review) => item.rating + acc, 0) /
    data.reviews?.length;

  return (
    <>
      <Link
        href={`/product/${data.product_id}`}
        className="group outer-wrapper"
      >
        <div className="inner-wrapper">
          <div className="image-wrapper">
            <Image
              fill
              src={data.product_items[0].image_url}
              alt={data.name}
              className="image"
            />
            <div className="discount-badge">
              <span>{discountPercentage}% off</span>
            </div>
            <div className="flex flex-col absolute -right-full transition-all duration-400 ease-in-out group-hover:right-1 group-hover:top-1">
              <button onClick={handleEyeClick} className="btn-svg">
                <IoEye size={18} color="inherit" />
              </button>
              <button
                onClick={handleHeartClick}
                className={`btn-svg ${
                  isClicked ? " text-[#d23f57]" : "text-transparent"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="18px"
                  height="18px"
                  viewBox="0 0 256 256"
                  xmlSpace="preserve"
                >
                  <defs></defs>
                  <g
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "currentColor",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                  >
                    <path
                      d="M 42.901 85.549 c 1.059 1.383 3.138 1.383 4.197 0 c 7.061 -9.223 28.773 -25.692 33.475 -30.82 c 12.568 -12.568 12.568 -32.946 0 -45.514 h 0 c -8.961 -8.961 -26.859 -7.239 -34.145 3.1 c -0.699 0.992 -2.158 0.992 -2.857 0 C 36.286 1.975 18.387 0.253 9.426 9.214 h 0 c -12.568 12.568 -12.568 32.946 0 45.514 C 14.128 59.857 35.84 76.325 42.901 85.549 z"
                      style={{
                        stroke: isClicked ? "none" : "black",
                        strokeWidth: 2,
                        strokeDasharray: "none",
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        strokeMiterlimit: 10,
                        fill: "currentColor",
                        fillRule: "nonzero",
                        opacity: 1,
                      }}
                      transform=" matrix(1 0 0 1 0 0) "
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full relative">
            <div className="mb-1 text-[13px] xs:text-sm ">
              {truncateText(data.name)}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <Rating
                name="pdt-rating"
                value={productRating}
                precision={0.5}
                readOnly
                size="small"
              />
              <span>({data.product_items.length})</span>
            </div>
            <div className="flex flex-col justify-start xs:items-center gap-1 text-xs xs:flex-row sm:text-sm sm:gap-2">
              <p className="font-semibold text-red-500">
                {formatNumber(
                  Array.isArray(data.product_items[0].sizes) &&
                    data.product_items[0].sizes.length > 0
                    ? data.product_items[0].sizes[0].price
                    : Array.isArray(data.product_items) &&
                      data.product_items.length > 0
                    ? data.product_items[0].price
                    : 0
                )}
              </p>
              <p className="text-slate-700 line-through">
                {formatNumber(
                  Array.isArray(data.product_items[0].sizes) &&
                    data.product_items[0].sizes.length > 0
                    ? data.product_items[0].sizes[0].discount
                    : Array.isArray(data.product_items) &&
                      data.product_items.length > 0
                    ? data.product_items[0].discount
                    : 0
                )}
              </p>
            </div>
            <div className="cart-wrapper">
              <div className="w-full h-full">
                <span className="cart-icon"></span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;

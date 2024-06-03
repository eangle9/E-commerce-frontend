"use client";

import formatNumber from "@/utils/formatNumber";
import truncateText from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const [isEyeClicked, setIsEyeClicked] = useState<Boolean>(false);

  const handleHeartClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(!isClicked);
  };

  const handleEyeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEyeClicked(!isEyeClicked);
  };

  const discountPercentage = Math.round((data.discount / data.price) * 100);

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  return (
    <Link href="#" className="group outer-wrapper">
      <div className="inner-wrapper">
        <div className="image-wrapper">
          <Image
            fill
            src="/images/hp-pavillion.jpg"
            alt="hp-pavillion"
            className="image"
          />
          <div className="discount-badge">
            <span>{discountPercentage}% off</span>
          </div>
          <div className="flex flex-col absolute -right-full transition-all duration-500 ease-in-out group-hover:right-1 group-hover:top-1">
            <button onClick={handleEyeClick} className="btn-svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
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
                    d="M 89.307 43.082 C 74.775 25.601 59.868 16.737 45 16.737 c -14.869 0 -29.775 8.864 -44.307 26.345 c -0.924 1.112 -0.924 2.724 0 3.836 C 15.225 64.399 30.131 73.264 45 73.264 c 14.868 0 29.775 -8.864 44.307 -26.346 C 90.231 45.806 90.231 44.194 89.307 43.082 z M 45 62 c -9.374 0 -17 -7.626 -17 -17 s 7.626 -17 17 -17 s 17 7.626 17 17 S 54.374 62 45 62 z"
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
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  />
                  <circle
                    cx="45"
                    cy="45"
                    r="9"
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
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                </g>
              </svg>
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
                width="1em"
                height="1em"
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
          <div className="mb-1 text-[13px] xs:text-sm ">{truncateText(data.name)}</div>
          <div className="flex items-center gap-1 text-sm">
            <Rating
              name="pdt-rating"
              value={productRating}
              precision={0.5}
              readOnly
              size="small"
            />
            <span>({data.reviews.length})</span>
          </div>
          <div className="flex items-center gap-1 text-xs sm:text-sm sm:gap-2">
            <p className="font-semibold text-red-500">
              {formatNumber(data.price)}
            </p>
            <p className="text-slate-700 line-through">
              {formatNumber(data.discount)}
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
  );
};

export default ProductCard;

"use client";
import Image from "next/image";
import Container from "../components/Container";
import { HiOutlineMinusSm } from "react-icons/hi";
import { HiOutlinePlusSm } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import formatNumber from "@/utils/formatNumber";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartProductType } from "../product/[productId]/ProductDetail";
import {
  decreaseCart,
  getTotals,
  increaseCart,
  removeFromCart,
} from "@/features/cart/cartSlice";
import Link from "next/link";
import { useEffect } from "react";

const page = () => {
  const Horizontal = () => {
    return <hr className="w-[70%] my-2" />;
  };

  const dispatch = useDispatch();

  const items: CartProductType[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const cartTotalAmount: number = useSelector(
    (state: RootState) => state.cart.cartTotalAmount
  );

  const shippingFee: number = 50;

  const handleRemoveFromCart = (item: CartProductType) => {
    dispatch(removeFromCart(item));
  };

  const handleDecreaseCartButton = (item: CartProductType) => {
    dispatch(decreaseCart(item));
  };

  const handleIncreaseCartButton = (item: CartProductType) => {
    dispatch(increaseCart(item));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [items, dispatch]);

  return (
    <div className="bg-[rgb(243,245,249)] min-h-screen">
      <Container>
        <div
          className={`${
            Array.isArray(items) && items.length === 0
              ? "grid grid-cols-1"
              : "grid grid-cols-1 lg:gap-6 lg:grid-cols-9 py-6"
          }`}
        >
          <div className="col-span-6 space-y-6 mb-6 lg:mb-0">
            {Array.isArray(items) && items.length > 0 ? (
              items.map((item: CartProductType, index: number) => (
                <div
                  key={index}
                  className="w-full lg:h-[160px] bg-white text-[#2b3445] shadow-lg flex flex-wrap items-center xxs:flex-nowrap rounded-[10px] relative mb-6 lg:mb-0 transition duration-300"
                >
                  <div className="w-full aspect-auto xxs:w-[160px]">
                    <Image
                      // src="/images/sumsungS23Ultra.webp"
                      src={item.selectedImage}
                      alt={item.name}
                      width={160}
                      height={160}
                      className="w-full h-auto object-contain xxs:w-[160px] xxs:h-[160px]"
                    />
                  </div>
                  <button
                    onClick={() => {
                      handleRemoveFromCart(item);
                    }}
                    className="absolute top-[15px] right-[15px] inline-flex items-center justify-center text-center p-[5px] text-[#0000008a] text-xl rounded-full transition-all duration-300 hover:bg-[#0000000a]"
                  >
                    <RxCross2 />
                  </button>
                  <div className="flex flex-col items-center xxs:items-start gap-2 p-2 w-full ">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[18px] whitespace-nowrap font-semibold">
                        {item.name}
                      </h2>
                      <p className="text-xs">
                        {item.selectedSize
                          ? `${item.selectedSize}/${item.selectedColor}`
                          : item.selectedColor}
                      </p>
                    </div>
                    <div className="flex items-center text-[14px] flex-wrap gap-2">
                      <span className="text-[#7D879C]">
                        {item.selectedPrice} x {item.cartQuantity}
                      </span>
                      <span className="text-[#D23F57] font-semibold">
                        {item.selectedPrice * item.cartQuantity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          handleDecreaseCartButton(item);
                        }}
                        className={`p-[4px] border rounded-[6px] text-xl transition-all duration-300  ${
                          item.cartQuantity === 1
                            ? "text-[#00000042] border-[#0000001f] cursor-default"
                            : "border-[#d23f5780] text-[#D23F57] cursor-pointer hover:border-[#D23F57] hover:bg-rose-50"
                        }`}
                      >
                        <HiOutlineMinusSm />
                      </button>
                      <div className="font-semibold text-[15px]">
                        {item.cartQuantity}
                      </div>
                      <button
                        onClick={() => {
                          handleIncreaseCartButton(item);
                        }}
                        className={`p-[4px] border rounded-[6px] text-xl  ${
                          item.inStock === item.cartQuantity
                            ? "text-[#00000042] border-[#0000001f] cursor-default"
                            : "border-[#d23f5780] text-[#D23F57] cursor-pointer hover:border-[#D23F57] hover:bg-rose-50"
                        }`}
                      >
                        <HiOutlinePlusSm />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/cartimage.webp"
                  width={220}
                  height={220}
                  alt="cart_image"
                />
                <span className="font-bold text-[16px] my-3 py-4">
                  No items yet? Continue shopping to explore more.
                </span>
                <Link href="/" className="min-w-[200px] xxs:min-w-[300px] my-2">
                  <Button
                    label="Explore items"
                    onClick={() => {}}
                    custom="rounded-3xl"
                  />
                </Link>
              </div>
            )}
          </div>
          {Array.isArray(items) && items.length > 0 && (
            <div className="col-span-3 self-start sticky top-48">
              <div className="flex flex-col bg-white w-full h-auto text-[#2b3445] shadow-lg rounded-[10px] p-5">
                <div className="mb-4">
                  <h1 className="font-bold text-xl">Summary</h1>
                  <Horizontal />
                </div>
                <div className="flex flex-col gap-6 items-center w-full">
                  <div className=" w-full flex justify-between items-center">
                    <p>Subtotal</p>
                    <p>{formatNumber(cartTotalAmount)}</p>
                  </div>

                  <div className="w-full flex justify-between items-center">
                    <p>Shipping fee</p>
                    <p>{formatNumber(shippingFee)}</p>
                  </div>

                  <div className="w-full flex justify-between items-center font-bold mb-2">
                    <p>Total</p>
                    <p>{formatNumber(cartTotalAmount + shippingFee)}</p>
                  </div>

                  <div className="w-full">
                    <Button
                      label="Checkout"
                      onClick={() => {}}
                      custom="rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default page;

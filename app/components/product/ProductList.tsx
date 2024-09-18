"use client";

import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
// import noProductGif from "@/public/images"
import Image from "next/image";
import Link from "next/link";
import Popup from "./popup";
import { Product } from "@/utils/types";

const ProductList = () => {
  const { items, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const isVisible: Boolean = useSelector(
    (state: RootState) => state.productPopup.isVisible
  );
  const [isClient, setIsClient] = useState<Boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Disable scrolling on background when the popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling again when the popup is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to ensure no overflow issues remain
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="p-20 flex items-center justify-center">
        <PuffLoader size={100} />
      </div>
    );
  }

  if (!isLoading && items === null) {
    return (
      <div className="flex items-center justify-center">
        <div className="max-w-[1200px] min-h-[386px] w-full flex flex-col items-center justify-center my-10 bg-slate-100">
          <div className="mb-1 text-center">
            <Image
              src="/images/no_items.gif"
              alt="no-product"
              width={160}
              height={160}
            />
          </div>
          <div className="text-xl font-bold text-center">
            Sorry, we can't find that product
          </div>
          <p className="text-[12px] leading-5 text-[#666]">
            But we still have lots for you to discover
          </p>
          <Link
            href="/"
            className="flex justify-center items-center mt-3 h-11 px-10 leading-[44px] rounded-[4px] text-[#fff] bg-[#ff4747]"
          >
            back to homepage
          </Link>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  const handleEyeClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {items?.map((product: any) => {
          return (
            <ProductCard
              key={product.product_id}
              data={product}
              onEyeClick={handleEyeClick}
            />
          );
        })}
      </div>
      {selectedProduct && isVisible && <Popup product={selectedProduct} />}
    </>
  );
};

export default ProductList;

"use client";

import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
// import noProductGif from "@/public/images"
import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  const { items, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const [isClient, setIsClient] = useState<Boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
      {items?.map((product: any) => {
        return <ProductCard key={product.product_id} data={product} />;
      })}
    </div>
  );
};

export default ProductList;

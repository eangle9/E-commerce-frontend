"use client";

import Image from "next/image";
import ProductDetail from "./ProductDetail";
import { product } from "@/utils/product";
import store, { RootState } from "@/redux/store";
import { fetchSingleProduct } from "@/features/products/productsSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface IdParams {
  productId: string;
}

const page = ({ params }: { params: IdParams }) => {
  useEffect(() => {
    store.dispatch(fetchSingleProduct(id));
  }, []);

  const productID = params.productId;
  const id = parseInt(productID, 10);

  const { item, error, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const [isClient, SetIsClient] = useState(false);

  useEffect(() => {
    SetIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <div>
      <ProductDetail product={item} />
    </div>
  );
};

export default page;

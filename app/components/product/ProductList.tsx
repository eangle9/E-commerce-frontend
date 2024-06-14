"use client";
// import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { products } from "@/utils/products";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Product } from "@/utils/types";
import { useEffect, useState } from "react";

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
    return <div>Loading...</div>;
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

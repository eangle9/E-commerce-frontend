"use client";

import formatNumber from "@/utils/formatNumber";
import Container from "../../components/Container";
import truncateText from "@/utils/truncateText";
import { Rating } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SetColor from "../../components/product/SetColor";
import { Item, SingleProduct } from "@/utils/types";
import Image from "next/image";
import ProductImage from "@/app/components/product/ProductImage";
import Button from "@/app/components/Button";
import { useDispatch } from "react-redux";
import { addToCart, getTotals } from "@/features/cart/cartSlice";
import SetSize from "@/app/components/product/SetSize";

interface ProductDetailProps {
  product: SingleProduct;
}

export type CartProductType = {
  id: number;
  item_id: number;
  size_id: number | null;
  name: string;
  description: string;
  selectedPrice: number;
  brand: string;
  category: string;
  selectedImage: string;
  selectedColor: string;
  selectedSize: string;
  discount: number;
  inStock: number;
  cartQuantity: number;
  // quantity: number;
};

// export type SelectedImgType = {
//   color: string;
//   colorCode: string;
//   image: string;
// };

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const distpatch = useDispatch();
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.product_id,
    item_id: product.items[0].item_id,
    size_id:
      Array.isArray(product.items[0].sizes) && product.items[0].sizes.length > 0
        ? product.items[0].sizes[0].id
        : null,
    name: product.name,
    description: product.description,
    selectedPrice:
      Array.isArray(product.items[0].sizes) && product.items[0].sizes.length > 0
        ? product.items[0].sizes[0].price
        : Array.isArray(product.items) && product.items.length > 0
        ? product.items[0].price
        : 0,
    // selectedPrice: product.items[0].price,
    brand: product.brand,
    category: product.category,
    selectedImage: product.items[0].image_url,
    selectedColor: product.items[0].color,
    selectedSize:
      Array.isArray(product.items[0].sizes) && product.items[0].sizes.length > 0
        ? product.items[0].sizes[0].size
        : "",
    discount:
      Array.isArray(product.items[0].sizes) && product.items[0].sizes.length > 0
        ? product.items[0].sizes[0].discount
        : Array.isArray(product.items) && product.items.length > 0
        ? product.items[0].discount
        : 0,
    inStock:
      Array.isArray(product.items[0].sizes) && product.items[0].sizes.length > 0
        ? product.items[0].sizes[0].qty_in_stock
        : Array.isArray(product.items) && product.items.length > 0
        ? product.items[0].in_stock
        : 0,
    cartQuantity: 0,
    // selectedImage: { ...product.images[0] },
    // quantity: 1,
  });

  // const handleSelectColor = useCallback(
  //   (value: SelectedImgType) => {
  //     setCartProduct((prev) => {
  //       return { ...prev, selectedImage: value };
  //     });
  //   },
  //   [cartProduct.selectedImage]
  // );

  useEffect(() => {
    distpatch(getTotals());
  }, [cartProduct, distpatch]);

  const handleAddToCart = (item: CartProductType) => {
    distpatch(addToCart(item));
  };

  const handleSelectColor = useCallback(
    (
      image: string,
      color: string,
      price: number,
      discount: number,
      item_id: number,
      size_id: number | null,
      in_stock: number
    ) => {
      setCartProduct((prev) => {
        return {
          ...prev,
          selectedImage: image,
          selectedColor: color,
          selectedPrice: price,
          discount: discount,
          item_id: item_id,
          size_id: size_id,
          inStock: in_stock,
        };
      });
    },
    [
      cartProduct.selectedImage,
      cartProduct.selectedColor,
      cartProduct.selectedPrice,
      cartProduct.discount,
      cartProduct.item_id,
      cartProduct.size_id,
      cartProduct.inStock,
    ]
  );

  const handleSelectSize = useCallback(
    (
      size: string,
      discount: number,
      price: number,
      size_id: number,
      in_stock: number
    ) => {
      setCartProduct((prev) => {
        return {
          ...prev,
          selectedSize: size,
          discount: discount,
          selectedPrice: price,
          size_id: size_id,
          inStock: in_stock,
        };
      });
    },
    [
      cartProduct.selectedSize,
      cartProduct.discount,
      cartProduct.selectedPrice,
      cartProduct.size_id,
      cartProduct.inStock,
    ]
  );

  const discountPercentage = Math.round(
    (cartProduct.selectedPrice / cartProduct.discount) * 100 - 100
  );

  const averageRating = product.reviews?.length
    ? product.reviews?.reduce(
        (acc: number, item: any) => acc + item.rating,
        0
      ) / product.reviews?.length
    : 0;

  const Horizontal = () => {
    return <hr className="w-[30%] my-2" />;
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-500 text-sm">
          <ProductImage
            product={product}
            cartProduct={cartProduct}
            handleSelectColor={handleSelectColor}
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium text-slate-700">
              {product.name}
            </h2>
            <p className="font-bold text-slate-900 text-2xl">
              {formatNumber(cartProduct.selectedPrice)}
            </p>
            <div className="flex items-center gap-2 text-rose-500">
              <p className="line-through">
                {formatNumber(cartProduct.discount)}
              </p>
              <p>{discountPercentage}%</p>
            </div>
            <div className="flex items-center gap-2">
              <Rating value={averageRating} precision={0.5} readOnly />
              <p className="font-bold text-slate-900">{averageRating}</p>
              <p>{product.reviews?.length || 0} reviews</p>
            </div>
            <Horizontal />
            <div className="text-justify flex-wrap">{product.description}</div>
            <Horizontal />
            <div>
              <span className="font-semibold text-slate-600">CATEGORY:</span>{" "}
              {product.category}
            </div>
            <div>
              <span className="font-semibold text-slate-600">BRAND:</span>{" "}
              {product.brand}
            </div>
            <div
              className={
                product.items[0].in_stock > 0
                  ? "text-teal-400"
                  : "text-rose-400"
              }
            >
              {product.items[0].in_stock > 0 ? "In stock" : "Out of stock"}
            </div>
            <Horizontal />
            <SetColor
              // images={product.images}
              images={product.items}
              cartProduct={cartProduct}
              handleSelectColor={handleSelectColor}
            />
            {product.items.map((item: Item) => {
              if (
                item.color == cartProduct.selectedColor &&
                Array.isArray(item.sizes) &&
                item.sizes.length > 0
              ) {
                return (
                  <>
                    <Horizontal />
                    <SetSize
                      item={item}
                      cartProduct={cartProduct}
                      handleSelectSize={handleSelectSize}
                    />
                  </>
                );
              }
              return null;
            })}

            <Horizontal />
            <div className="flex gap-8 items-center">
              <div className="font-semibold">Quantity:</div>
              <div className="flex gap-4 items-center">
                <button className="px-2 border border-slate-300 rounded cursor-pointer">
                  -
                </button>
                <div>1</div>
                <button className="px-2 border border-slate-300 rounded cursor-pointer">
                  +
                </button>
              </div>
            </div>
            <Horizontal />
            <div className="max-w-[300px]">
              <Button
                label="Add To Cart"
                onClick={() => {
                  handleAddToCart(cartProduct);
                }}
                custom="rounded-[6px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;

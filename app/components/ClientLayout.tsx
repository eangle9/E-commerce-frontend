"use client";

import React, { useEffect, useRef, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { closeMenu } from "@/features/menu/menuSlice";
// import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { fetchProducts } from "@/features/products/productsSlice";
import { getTotals, rehydrateCart } from "@/features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { closePopup } from "@/features/popup/popupSlice";
import {
  closeCat,
  fetchProductCategory,
} from "@/features/category/categorySlice";
import { CartProductType } from "../product/[productId]/ProductDetail";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const isOpen: boolean = useSelector((state: RootState) => state.menu.isOpen);
  const isOpened: boolean = useSelector(
    (state: RootState) => state.category.isOpened
  );
  const layoutRef = useRef<HTMLDivElement>(null);
  // const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      layoutRef.current &&
      !layoutRef.current.contains(event.target as Node)
      // dropdownRef.current &&
      // !dropdownRef.current.contains(event.target as Node)
    ) {
      if (isOpen) {
        dispatch(closeMenu());
      }

      // if (isOpened) {
      //   dispatch(closeCat());
      // }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const [isClient, setIsClient] = useState<Boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        const cartItems: CartProductType[] = JSON.parse(storedCartItems);

        // Calculate the initial cartTotalQuantity and cartTotalAmount
        const { quantity, total } = cartItems.reduce(
          (totals, item) => {
            const { selectedPrice, cartQuantity } = item;
            const itemTotal = selectedPrice * cartQuantity;
            totals.total += itemTotal;
            return totals;
          },
          { quantity: cartItems.length, total: 0 }
        );

        dispatch(
          rehydrateCart({
            cartItems,
            cartTotalQuantity: quantity,
            cartTotalAmount: total,
          })
        );
      }
    }
  }, [isClient]);

  return (
    <div ref={layoutRef} className="layout">
      <Navbar /* dropdownRef={dropdownRef}  */ />
      <main className="flex-grow">{children}</main>
      <Footer />

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000066] z-[47]"
          onClick={() => dispatch(closeMenu())}
        ></div>
      )}

      {/* {isOpened && (
        <div
          className="fixed inset-0 z-[47]"
          onClick={() => dispatch(closeCat())}
        ></div>
      )} */}
    </div>
  );
};

store.dispatch(
  fetchProducts({
    name: "",
    category: "",
    sort: "",
    page: "",
    per_page: "",
  })
);
store.dispatch(getTotals());
store.dispatch(fetchProductCategory());

const WrappedClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ClientLayout>{children}</ClientLayout>
      <ToastContainer />
    </Provider>
  );
};

export default WrappedClientLayout;

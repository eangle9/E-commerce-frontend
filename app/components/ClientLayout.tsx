"use client";

import React, { useEffect, useRef } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/redux/store";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { closeMenu } from "@/features/menu/menuSlice";
// import { useGetAllProductsQuery } from "@/features/products/productsApi";
import { fetchProducts } from "@/features/products/productsSlice";
import { getTotals } from "@/features/cart/cartSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { closePopup } from "@/features/popup/popupSlice";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isVisible = useSelector((state: RootState) => state.popup.isVisible);
  const layoutRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    // console.log("clicked target: ", event.target);
    if (
      layoutRef.current &&
      !layoutRef.current.contains(event.target as Node)
    ) {
      // console.log("clicked outside", "closing menu");
      if (isOpen) {
        dispatch(closeMenu());
      }
      // if (isVisible) {
      //   dispatch(closePopup());
      // }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={layoutRef} className="layout">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000066] z-[47]"
          onClick={() => dispatch(closeMenu())}
        ></div>
      )}
      {/* {isVisible && (
        <div
          className="fixed inset-0 bg-[#00000066] z-[47]"
          onClick={() => dispatch(closePopup())}
        ></div>
      )} */}
    </div>
  );
};

store.dispatch(fetchProducts());
store.dispatch(getTotals());

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

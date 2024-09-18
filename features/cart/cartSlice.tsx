import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "@/utils/types";
import { CartProductType } from "@/app/product/[productId]/ProductDetail";
import { Bounce, toast } from "react-toastify";
import { useEffect, useState } from "react";

export interface AddToCartPayload {
  product: CartProductType;
  quantity: number;
}

interface CartState {
  cartItems: CartProductType[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const getInitialCartState = () => {
  // if (typeof window !== "undefined") {
  //   const storedCartItems = localStorage.getItem("cartItems");
  //   const cartItems: CartProductType[] = storedCartItems
  //     ? JSON.parse(storedCartItems)
  //     : [];

  //   // Calculate the initial cartTotalQuantity and cartTotalAmount
  //   const { totalQuantity, totalAmount } = cartItems.reduce(
  //     (totals, item) => {
  //       totals.totalQuantity += item.cartQuantity;
  //       totals.totalAmount += item.selectedPrice * item.cartQuantity;
  //       return totals;
  //     },
  //     { totalQuantity: 0, totalAmount: 0 }
  //   );

  //   return {
  //     cartItems,
  //     cartTotalQuantity: totalQuantity,
  //     cartTotalAmount: totalAmount,
  //   };
  // }

  return {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  };
};

const initialState: CartState = getInitialCartState();

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const { product, quantity } = action.payload;
      const index: number = state.cartItems.findIndex(
        (item: CartProductType) =>
          item.id === product.id &&
          item.item_id === product.item_id &&
          item.size_id === product.size_id
      );

      if (index >= 0) {
        if (
          state.cartItems[index].cartQuantity + quantity >
          state.cartItems[index].inStock
        ) {
          toast.warn(
            `${product.name} quantity number is beyond the stock limit`,
            {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            }
          );
        } else {
          state.cartItems[index].cartQuantity += quantity;
          toast.info(`increased ${product.name} cart quantity`, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
        }
      } else {
        const tempProduct = { ...product, cartQuantity: quantity };
        state.cartItems.push(tempProduct);
        toast.success(`${product.name} added to cart`, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action: PayloadAction<CartProductType>) => {
      let nextCartItems;
      // const nextCartItems: CartProductType[] = state.cartItems.filter(
      //   (cartItem: CartProductType) =>
      //     cartItem.id !== action.payload.id &&
      //     cartItem.item_id !== action.payload.item_id &&
      //     cartItem.size_id !== action.payload.size_id
      // );
      if (action.payload.size_id !== null) {
        nextCartItems = state.cartItems.filter(
          (cartItem: CartProductType) =>
            cartItem.size_id !== action.payload.size_id
        );
      } else {
        nextCartItems = state.cartItems.filter(
          (cartItem: CartProductType) =>
            cartItem.item_id !== action.payload.item_id
        );
      }

      state.cartItems = nextCartItems;
      if (typeof window !== "undefined") {
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decreaseCart: (state, action: PayloadAction<CartProductType>) => {
      let nextCartItems;
      const index: number = state.cartItems.findIndex(
        (cartItem: CartProductType) =>
          cartItem.id === action.payload.id &&
          cartItem.item_id === action.payload.item_id &&
          cartItem.size_id === action.payload.size_id
      );

      if (state.cartItems[index].cartQuantity > 1) {
        state.cartItems[index].cartQuantity -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
      }
      // else if (state.cartItems[index].cartQuantity === 1) {
      //   if (action.payload.size_id !== null) {
      //     nextCartItems = state.cartItems.filter(
      //       (cartItem: CartProductType) =>
      //         cartItem.size_id !== action.payload.size_id
      //     );
      //   } else {
      //     nextCartItems = state.cartItems.filter(
      //       (cartItem: CartProductType) =>
      //         cartItem.item_id !== action.payload.item_id
      //     );
      //   }

      //   state.cartItems = nextCartItems;
      // }
    },
    increaseCart: (state, action: PayloadAction<CartProductType>) => {
      // let nextCartItems;
      const index: number = state.cartItems.findIndex(
        (cartItem: CartProductType) =>
          cartItem.id === action.payload.id &&
          cartItem.item_id === action.payload.item_id &&
          cartItem.size_id === action.payload.size_id
      );

      if (
        state.cartItems[index].cartQuantity < state.cartItems[index].inStock
      ) {
        state.cartItems[index].cartQuantity += 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        }
      }
    },
    rehydrateCart: (state, action: PayloadAction<CartState>) => {
      state.cartItems = action.payload.cartItems;
      state.cartTotalAmount = action.payload.cartTotalAmount;
      state.cartTotalQuantity = action.payload.cartTotalQuantity;
    },
    getTotals: (state) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { selectedPrice, cartQuantity } = cartItem;
          const itemTotal = selectedPrice * cartQuantity;
          cartTotal.total += itemTotal;
          // cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: state.cartItems.length,
        }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  rehydrateCart,
  getTotals,
} = CartSlice.actions;
export default CartSlice.reducer;

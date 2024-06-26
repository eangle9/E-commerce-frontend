import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "@/utils/types";
import { CartProductType } from "@/app/product/[productId]/ProductDetail";

interface CartState {
  cartItems: CartProductType[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const getInitialCartState = () => {
  if (typeof window != "undefined") {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }

  return [];
};

const initialState: CartState = {
  // cartItems: localStorage.getItem("cartItems")
  //   ? JSON.parse(localStorage.getItem("cartItems") as string)
  //   : [],
  cartItems: getInitialCartState(),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      const index: number = state.cartItems.findIndex(
        (item: CartProductType) =>
          item.id === action.payload.id &&
          item.item_id === action.payload.item_id &&
          item.size_id === action.payload.size_id
      );

      if (index >= 0) {
        state.cartItems[index].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
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
  getTotals,
} = CartSlice.actions;
export default CartSlice.reducer;

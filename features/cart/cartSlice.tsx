import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "@/utils/types";
import { CartProductType } from "@/app/product/[productId]/ProductDetail";

interface CartState {
  cartItem: CartProductType[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProductType>) => {
      state.cartItem.push(action.payload);
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;

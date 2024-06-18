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
      const index: number = state.cartItem.findIndex(
        (item: CartProductType) =>
          item.id === action.payload.id &&
          item.item_id === action.payload.item_id &&
          item.size_id === action.payload.size_id
      );

      if (index >= 0) {
        state.cartItem[index].cartQuantity += 1
      }else {
        const tempProduct = {...action.payload, cartQuantity: 1}
        state.cartItem.push(tempProduct);
      }
    },
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;

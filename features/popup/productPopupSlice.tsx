import { createSlice } from "@reduxjs/toolkit";

interface ProductPopupState {
  isVisible: boolean;
}
const initialState: ProductPopupState = {
  isVisible: false,
};

const productPopupSlice = createSlice({
  name: "productPopup",
  initialState,
  reducers: {
    toggleProductPopup: (state) => {
      state.isVisible = !state.isVisible;
    },
    closeProductPopup: (state) => {
      state.isVisible = false;
    },
  },
});

export const { toggleProductPopup, closeProductPopup } = productPopupSlice.actions;

export default productPopupSlice.reducer;
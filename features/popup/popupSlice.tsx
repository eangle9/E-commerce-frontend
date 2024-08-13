import { createSlice } from "@reduxjs/toolkit";

interface PopupState {
  isVisible: boolean;
}
const initialState: PopupState = {
  isVisible: false,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    togglePopup: (state) => {
      state.isVisible = !state.isVisible;
    },
    closePopup: (state) => {
      state.isVisible = false;
    },
  },
});

export const { togglePopup, closePopup } = popupSlice.actions;

export default popupSlice.reducer;

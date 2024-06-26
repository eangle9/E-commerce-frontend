import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
// import { productsApi } from "@/features/products/productsApi";
import productsReducer from "@/features/products/productsSlice";
import cartReducer from "@/features/cart/cartSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    products: productsReducer,
    cart: cartReducer,
    // [productsApi.reducerPath]: productsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

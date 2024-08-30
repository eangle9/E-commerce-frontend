import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductCategory {
  category_id: number;
  name: string;
  parent_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

interface CategoryState {
  categories: ProductCategory[];
  isLoading: boolean;
  error: string | null;
  isOpened: boolean;
}

export const fetchProductCategory = createAsyncThunk<ProductCategory[], void>(
  "product/fetchProductCategory",
  async () => {
    try {
      const response = await axios.get("http://localhost:9000/category/list");
      // console.log("API Response:", response); // Debugging log
      return response.data.data.data; // Accessing the nested data property
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const fullErrorMessage = error.response.data.error;
        const errorMessage = fullErrorMessage.split(",")[0];
        const message = errorMessage.split(":")[1];

        throw new Error(message);
      }

      throw new Error("An unexpected error occured");
    }
  }
);

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
  isOpened: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    toggleCat: (state) => {
      state.isOpened = !state.isOpened;
    },
    closeCat: (state) => {
      state.isOpened = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductCategory.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchProductCategory.fulfilled,
      (state, action: PayloadAction<ProductCategory[]>) => {
        state.isLoading = false;
        state.categories = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchProductCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { toggleCat, closeCat} = categorySlice.actions
export default categorySlice.reducer;

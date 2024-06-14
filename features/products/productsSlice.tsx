import { SingleProduct } from "@/utils/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Product {
  product_id: number;
  name: string;
  product_items: Item[];
  Reviews: Review[];
}

interface Item {
  item_id: number;
  color: string;
  size: string;
  image_url: string;
  price: number;
  discount: number;
  in_stock: number;
}

interface Review {
  review_id: number;
  user_id: number;
  product_id: number;
  rating: number;
  comment: string;
  created_at: string;
  user: User;
}

interface User {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}

interface ProductsState {
  items: Product[];
  item: any;
  isLoading: boolean;
  //   status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:9000/products/list");
      //   console.log('API Response:', response.data.data); // Debugging log
      return response.data.data; // Accessing the nested data property
    } catch (err) {
      //   console.error("Error fetching products:", err);
      return rejectWithValue("Network error");
    }
  }
);

export const fetchSingleProduct = createAsyncThunk<SingleProduct, number>(
  "products/fetchSingleProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:9000/products/${id}`);
      //   console.log('API Response:', response.data.data); // Debugging log
      return response.data.data; // Accessing the nested data property
    } catch (err) {
      //   console.error("Error fetching products:", err);
      return rejectWithValue("Network error");
    }
  }
);

const initialState: ProductsState = {
  items: [],
  item: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(
      fetchSingleProduct.fulfilled,
      (state, action: PayloadAction<SingleProduct>) => {
        state.isLoading = false;
        state.item = action.payload;
        state.error = null;
      }
    );
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export default productsSlice.reducer;

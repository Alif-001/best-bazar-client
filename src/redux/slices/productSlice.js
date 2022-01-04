import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchGroceries = createAsyncThunk(
//   "grocery/fetchGroceries",
//   async (userId, thunkAPI) => {
//     const response = await fetch(
//       "https://onelife-grocery.herokuapp.com/groceries"
//     ).then((res) => res.json());
//     return response;
//   }
// );
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      "https://frozen-falls-23301.herokuapp.com/products"
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    // addToCart: (state, { payload }) => {
    //   state.cartItems.push(payload);
    // },
    // removeFromReadingList: (state, { payload }) => {
    //   state.readingList = state.readingList.filter(
    //     (book) => book._id !== payload
    //   );
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

// export const { addToCart } = grocerySlice.actions;

export default productSlice.reducer;

import React, { useState } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const [myData, setMyData] = useState(allProduct);
export const productfetch = createAsyncThunk(
  "products/fetchproducts",
  async (catogry, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const data = await axios(`http://localhost:1337/api/${catogry}`);
      return data.data.data;
    } catch (rejected) {
      return rejectWithValue(rejected.message);
    }
  }
);

let productSlice = createSlice({
  name: "productslice",
  initialState: { product: [], loading: false },
  reducers: {},
  extraReducers: {
    [productfetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = [];
      let data = action.payload;
      data.map((product) => state.product.push(product));
    },
    [productfetch.pending]: (state) => {
      state.loading = true;
    },
  },
});

export default productSlice.reducer;

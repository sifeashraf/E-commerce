import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const [myData, setMyData] = useState(allProduct);
export const productsfetch = createAsyncThunk(
  "products/productsfetch",
  async (catogry, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const data = await axios.get(`https://e-commerce-project-g4i2.onrender.com/api/${catogry}`);
      return data.data.data;
    } catch (rejected) {
      return rejectWithValue(rejected);
    }
  }
);
export const productfetch = createAsyncThunk("products/productfetch", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const data = await axios.get(
      `https://e-commerce-project-g4i2.onrender.com/api/products?populate=*&filters[id][$eq]=${id}`
    );
    // console.log(data.data.data[0].attributes); //product_img.data[0].attributes.url
    return data.data.data[0].attributes;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

let productSlice = createSlice({
  name: "productslice",
  initialState: { product: [], loading: false, error: false, errormessge: "", productdata: {} },
  reducers: {
    fetchchosenproduct: (state, action) => {
      state.productdata = action.payload;
    },
  },

  extraReducers: {
    [productsfetch.pending]: (state) => {
      state.error = false;
      state.loading = true;
    },
    [productsfetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.product = [];
      let data = action.payload;
      data.map((product) => state.product.push(product));
    },
    [productsfetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errormessge = action.payload;
    },

    [productfetch.pending]: (state) => {
      state.error = false;
      state.loading = true;
      state.productdata = {};
    },
    [productfetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.productdata = action.payload;
    },
    [productfetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.errormessge = action.payload;
    },
  },
});
export let { fetchchosenproduct } = productSlice.actions;
export default productSlice.reducer;

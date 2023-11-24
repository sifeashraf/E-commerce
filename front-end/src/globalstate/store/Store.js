import { configureStore } from "@reduxjs/toolkit";
import moodSlice from "../Slice/moodSlice";
import productSlice from "../Slice/product";
let store = configureStore({
  reducer: { moodSlice, productSlice },
});
export default store;

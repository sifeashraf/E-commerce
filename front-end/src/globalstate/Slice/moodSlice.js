import { createSlice } from "@reduxjs/toolkit";

let moodSlice = createSlice({
  name: "moodSlice",
  initialState: { colorMood: "light" },
  reducers: {
    toggleMood: (state) => {
      state.colorMood = state.colorMood === "dark" ? "light" : "dark";
    },
  },
});
export let { toggleMood } = moodSlice.actions;
export default moodSlice.reducer;

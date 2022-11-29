import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: { count: 0, message: "Select amount of Product" },

  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
      if (state.count >= 5) {
        state.count = 5;
        state.message = "Highest amount Reached";
      } else {
        state.message = "Preferable Amount";
      }
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
      if (state.count <= 0) {
        state.count = 0;
        state.message = "Lowest amount Reached";
      } else {
        state.message = "Preferable Amount";
      }
    },
    reset: (state) => {
      state.count = 0;
      state.message = "Select amount of Product";
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

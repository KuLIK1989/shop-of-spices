import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  addItems: [],
  plusItems: [],
  minusItems: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state) {
      state.addItems = state.plusItems;
    },
    plusItems(state, action) {},
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;

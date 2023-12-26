import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // console.log("initialState-AddItem", initialState);
      // const findItem = state.items.find((obj) => obj.id === action.payload.id);
      // console.log("findItem в добавлении", findItem);
      // if (findItem) {
      // } else {
      //   state.items.push(action.payload);
      // }

      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price * obj.count + sum;
      // }, 0);
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      console.log(findItem);
      
    },
    minusItem(state, action) {
      // const findItem = state.items.find((obj) => obj.id === action.payload);
      // console.log(findItem);
      // if (findItem.count !== 0) {
      //   findItem.count--;
      // }
      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price * obj.count - sum;
      // }, 0);
    },
    plusItem(state, action) {
      // console.log("initialState-itemsPlusItem", initialState);
      // const findItem = state.items.find((obj) => obj.id === action.payload.id);
      // console.log("plusItem", findItem);
      // if (findItem) {
      //   findItem.count++;
      //   console.log("сработало добавление");
      // } else {
      //   state.items.push({
      //     ...action.payload,
      //     count: 1,
      //   });
      // }
      // state.totalPrice = state.items.reduce((sum, obj) => {
      //   return obj.price * obj.count + sum;
      // }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItem, minusItem, plusItem } =
  cartSlice.actions;

export default cartSlice.reducer;

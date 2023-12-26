import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  finalItems: [],
  superFinalItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.finalItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        state.superFinalItems = state.finalItems;
      }
      state.totalPrice = state.superFinalItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      const superPlusItem = state.superFinalItems.find(
        (obj) => obj.id === action.payload
      );
      if (superPlusItem.count !== 0) {
        superPlusItem.count--;
      }

      console.log(findItem);
      if (findItem.count !== 0) {
        findItem.count--;
      }
      state.totalPrice = state.superFinalItems.reduce((sum, obj) => {
        return obj.price * obj.count - sum;
      }, 0);
    },
    plusItem(state, action) {
      //функция не увеличивает количество и стоимость без нажатия кнопки "в корзину" даже если нажимаю кнопку + в корзине
      const superPlusItem = state.superFinalItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (superPlusItem) {
        superPlusItem.count++;
        console.log("superPlusItem", superPlusItem.count);
      }
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      console.log("plusItem findItem", findItem);
      if (findItem) {
        findItem.count++;
        console.log("PLuseItem увеличение счетчика");
      } else {
        state.items.push({ ...action.payload, count: 1 });
        console.log("PLuseItem else", state.finalItems);
      }
      state.totalPrice = state.superFinalItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      state.finalItems = state.items;
      console.log("что-то прошло в finalItems", state.finalItems);
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

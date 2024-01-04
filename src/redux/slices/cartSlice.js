import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [], //лежат все манипуляции с карточкой
  cartItems: [], // сюда передаются данные после нажатия кнопки "в корзину"
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //функция работает на кнопках "+" увеличивая количество и сумму заказа
    plusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    //функция работает на кнопках "-" уменьшая количество и сумму заказа
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count !== 0) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    //FIXME: Кнопка должна передавать данные в корзину и карт бокс в хэдере
    // addItem(state, action) {
    //   const findItem = state.items.find((obj) => obj.id === action.payload.id);
    //   if (findItem) {
    //     state.cartItems = state.items;
    //   }
    // },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
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

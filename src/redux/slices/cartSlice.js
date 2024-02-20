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
      const findCartItem = state.cartItems.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      if (findCartItem) {
        findCartItem.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    //функция работает на кнопках "-" уменьшая количество и сумму заказа
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      const findCartItem = state.cartItems.find(
        (obj) => obj.id === action.payload
      );
      if (findItem.count > 0) {
        findItem.count--;
      } else {
        console.error("dont count");
      }
      if (findCartItem) {
        findCartItem.count--;
      } else {
        console.error("error");
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    // Функция добавления выбранного товара в корзину
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      // Проверка на Дупликат обьекта. Если лежит такой же обьект - не добавлять в корзину
      if (!state.cartItems.find((obj) => obj.name === findItem.name)) {
        state.cartItems.push(findItem);
      } else {
        console.log("errror");
      }
    },

    // Фунцкия удаления карточки из корзины при нажатии на кнопку удаления
    removeItem(state, action) {
      // state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.cartItems = state.cartItems.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = state.cartItems.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem, clearItem, minusItem, plusItem } =
  cartSlice.actions;

export default cartSlice.reducer;

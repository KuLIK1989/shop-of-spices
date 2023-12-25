import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./slices/counterSlice";
import cart from "./slices/cartSlice";
import counter from "./slices/counterSlice";

export const store = configureStore({
  reducer: { cart, counter },
});

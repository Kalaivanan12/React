import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import carsReducer from "./carsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    cars: carsReducer,
  },
});

export default store;

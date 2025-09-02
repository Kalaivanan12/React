import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import carsReducer from "./carsSlice";
import bookingReducer from "./bookingSlice"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    booking: bookingReducer,
    cars: carsReducer,
  },
});

export default store;

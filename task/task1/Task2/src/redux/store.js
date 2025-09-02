import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import carsReducer from "./carsSlice";
import bookingsReducer from "./bookingsSlice"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    bookings: bookingsReducer,
    cars: carsReducer,
  },
});

export default store;

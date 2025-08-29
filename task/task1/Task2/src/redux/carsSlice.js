// redux/carsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, brand: "Toyota", model: "Innova" },
    { id: 2, brand: "Honda", model: "City" },
    { id: 3, brand: "Hyundai", model: "Creta" },
  ],
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default carsSlice.reducer;

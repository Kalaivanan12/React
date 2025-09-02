import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [], // all confirmed bookings
  },
  reducers: {
    addBooking: (state, action) => {
      state.list.push(action.payload);
    },
    deleteBooking: (state, action) => {
      state.list = state.list.filter((b, i) => i !== action.payload);
    },
  },
});

export const { addBooking, deleteBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

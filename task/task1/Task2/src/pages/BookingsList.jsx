import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../redux/bookingSlice";

export default function BookingsList() {
  const bookings = useSelector((state) => state.bookings.list);
  const dispatch = useDispatch();

  return (
    <div className="customers-container">
      <h2>All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Car</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.name}</td>
                <td>{b.email}</td>
                <td>{b.phone}</td>
                <td>{b.car}</td>
                <td>{b.date}</td>
                <td>
                  <button onClick={() => dispatch(deleteBooking(i))}>❌ Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

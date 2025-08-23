import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateCar() {
  const location = useLocation();
  const navigate = useNavigate();
  const car = location.state?.car;

  const [name, setName] = useState(car?.name || "");
  const [price, setPrice] = useState(car?.price || "");
  const [img, setImg] = useState(car?.img || "");

  if (!car) {
    return <p> Car data not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend or update local state
    const updatedCar = { ...car, name, price, img };
    console.log("Updated Car:", updatedCar);

    // Navigate back to car details
    navigate(`/cars/${car.id}`, { state: { car: updatedCar } });
  };

  return (
    <div className="car-details">
      <h1>Update Car</h1>
      <form onSubmit={handleSubmit} className="update-form">
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

export default function CarDetails() {
  const { id } = useParams();
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return <p className="car-details">❌ Car not found. Go back to Cars page.</p>;
  }

  return (
    <div className="car-details">
      <h1>Car Details</h1>
      <img src={car.img} alt={car.name} />
      <h2>{car.name}</h2>
      <p>Price: {car.price}</p>
      <p>Car ID: {id}</p>

      <Link to="/cars" className="back-btn">⬅ Back to Cars</Link>
    </div>
  );
}

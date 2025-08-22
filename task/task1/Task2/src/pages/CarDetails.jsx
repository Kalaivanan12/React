import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

// ✅ Import your image
import teslaImg from "../img/teslaa.jpg";

export default function CarDetails() {
  const { id } = useParams();
  const location = useLocation();
  const car = location.state?.car;

  if (!car) {
    return (
      <div className="car-details">
        <p>❌ Car not found. Please go back.</p>
        <Link to="/cars" className="back-btn">⬅ Back to Cars</Link>
      </div>
    );
  }

  return (
    <div className="car-details">
      <h1>Car Details</h1>

      {/* ✅ Use imported image for Tesla, fallback for others */}
      <img
        src={car.name === "Tesla Model S" ? teslaImg : car.img}
        alt={car.name}
      />

      <h2>{car.name}</h2>
      <p>Price: {car.price}</p>
      <p>Car ID: {id}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to={`/cars/update/${car.id}`} state={{ car }} className="back-btn">
          ✏ Update Car
        </Link>
        <Link to="/cars" className="back-btn" style={{ marginLeft: "10px" }}>
          ◄ Back to Cars
        </Link>
      </div>
    </div>
  );
}

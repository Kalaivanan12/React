import React from "react";
import { Link } from "react-router-dom";

const carList = [
  { id: 1, name: "Tesla Model S", price: "$85,000", img: "https://via.placeholder.com/300x200?text=Tesla+Model+S" },
  { id: 2, name: "BMW M4", price: "$72,000", img: "https://via.placeholder.com/300x200?text=BMW+M4" },
  { id: 3, name: "Audi A6", price: "$60,000", img: "https://via.placeholder.com/300x200?text=Audi+A6" }
];

export default function Cars() {
  return (
    <div className="cars-container">
      <h1>🚘 Car List</h1>
      <div className="car-list">
        {carList.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <Link to={`/cars/${car.id}`} state={{ car }}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

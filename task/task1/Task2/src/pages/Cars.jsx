import React from "react";
import { Link,Outlet } from "react-router-dom";

const carList = [
  { id: 1, name: "Tesla Model S", price: "$85,000", img: "./src/img/teslaa.jpg" },
  { id: 2, name: "BMW M4", price: "$72,000", img: "./src/img/bmw.jpg" },
  { id: 3, name: "Audi A6", price: "$60,000", img: "./src/img/audi-a6.jpg" }
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
       <Outlet />
    </div>
  );
}

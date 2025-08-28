import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./cars.css";

const Cars = () => {
  const { addToCart } = useContext(CartContext);

  
  const cars = [
    {
      id: 1,
      name: "Tesla Model S",
      price: 80000,
      image: "./src/img/teslaa.jpg",
      description: "Luxury electric sedan with autopilot."
    },
    {
      id: 2,
      name: "BMW X5",
      price: 60000,
      image: "./src/img/bmw.jpg",
      description: "Premium SUV with comfort and style."
    },
    {
      id: 3,
      name: "Audi A4",
      price: 45000,
      image: "./src/img/audi.jpg",
      description: "Compact luxury sedan with powerful engine."
    },
    {
      id: 3,
      name: "Tesla Model 3",
      price: 75000,
      image: "./src/img/teslaa.jpg",
      description: "Luxury electric sedan with autopilot."
    },
  ];

  return (
    <div className="cars-container">
      <h2>Available Cars</h2>
      <div className="cars-list">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <div className="car-info">
              <h3>{car.name}</h3>
              <p>{car.description}</p>
              <p className="price">${car.price.toLocaleString()}</p>
            </div>
            <button className="add-to-cart" onClick={() => addToCart(car)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;

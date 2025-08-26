import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "./CartContext"; // ✅ import CartContext (same folder "pages")

// Car list
import teslaImg from "../img/teslaa.jpg";
import bmwImg from "../img/bmw.jpg";
import audiImg from "../img/audi.jpg";

const carList = [
  { id: 1, name: "Tesla Model S", price: "$85,000", img: teslaImg },
  { id: 2, name: "BMW M4", price: "$72,000", img: bmwImg },
  { id: 3, name: "Audi A6", price: "$60,000", img: audiImg }
];

export default function Cars() {
  const { addToCart } = useContext(CartContext); // ✅ use CartContext

  return (
    <div className="cars-container">
      <h1>Car List</h1>
      <div className="car-list">
        {carList.map((car) => (
          <div key={car.id} className="car-card">
            <img src={car.img} alt={car.name} />
            <h2>{car.name}</h2>
            <p>{car.price}</p>

            {/* View Details */}
            <Link to={`/cars/${car.id}`} state={{ car }}>
              View Details
            </Link>

            {/* ✅ Add to Cart Button */}
            <button onClick={() => addToCart(car)} className="add-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

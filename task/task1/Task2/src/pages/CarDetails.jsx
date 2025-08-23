import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

//  Import your images
import teslaImg from "../img/teslaa.jpg";
import bmwImg from "../img/bmw.jpg";
import audiImg from "../img/audi.jpg";

export default function CarDetails() {
  const { id } = useParams();
  const location = useLocation();
  const car = location.state?.car;

  //  Fallback mapping for images
  const carImages = {
    "Tesla Model S": teslaImg,
    "BMW M4": bmwImg,
    "Audi A6": audiImg,
  };

  if (!car) {
    return (
      <div className="car-details">
        <p> Car not found. Please go back.</p>
        <Link to="/cars" className="back-btn">⬅ Back to Cars</Link>
      </div>
    );
  }

  return (
    <div className="car-details">
      <h1>Car Details</h1>

      {/* Use imported images first, fallback to car.img */}
      <img
        src={carImages[car.name] || car.img}
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

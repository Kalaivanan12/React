import React from "react";
import { FaHeart, FaUser, FaPhoneAlt, FaSearch } from "react-icons/fa";
import "./FilterBar.css";

const filterOptions = [
  {
    title: "Price Range",
    items: ["Under ₹5 Lakhs", "₹5–10 Lakhs", "₹10–20 Lakhs", "Above ₹20 Lakhs"],
  },
  {
    title: "Make and Model",
    items: ["Maruti Suzuki", "Hyundai", "Toyota", "Honda", "BMW", "Mercedes"],
  },
  {
    title: "Year",
    items: ["2024", "2023", "2022", "2021", "2020 & Older"],
  },
  {
    title: "Fuel",
    items: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"],
  },
  {
    title: "KM Driven",
    items: ["Under 20,000 km", "20,000–50,000 km", "50,000–1,00,000 km", "Above 1,00,000 km"],
  },
  {
    title: "Body Type",
    items: ["SUV", "Sedan", "Hatchback", "Coupe", "Convertible"],
  },
  {
    title: "Transmission",
    items: ["Manual", "Automatic", "AMT", "DCT"],
  },
];

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <ul>
        {filterOptions.map((filter, index) => (
          <li key={index} className="dropdown">
            {filter.title} ▾
            <ul className="dropdown-menu">
              {filter.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;

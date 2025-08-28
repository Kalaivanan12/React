import React from "react";
import { FaTools, FaShieldAlt, FaCarSide, FaCogs } from "react-icons/fa"; 

const servicesList = [
  { id: 1, name: "Car Maintenance", description: "Regular maintenance to keep your car in top condition.", icon: <FaTools /> },
  { id: 2, name: "Car Insurance", description: "Get comprehensive insurance for your vehicle.", icon: <FaShieldAlt /> },
  { id: 3, name: "Car Detailing", description: "Professional cleaning and detailing services.", icon: <FaCarSide /> },
  { id: 4, name: "Custom Upgrades", description: "Upgrade your car with performance and aesthetic mods.", icon: <FaCogs /> }
];

export default function Services() {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-list">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

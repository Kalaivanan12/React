import React from "react";

const servicesList = [
    { id: 1, name: "Car Maintenance", description: "Regular maintenance to keep your car in top condition." },
    { id: 2, name: "Car Insurance", description: "Get comprehensive insurance for your vehicle." },
    { id: 3, name: "Car Detailing", description: "Professional cleaning and detailing services." },
    { id: 4, name: "Custom Upgrades", description: "Upgrade your car with performance and aesthetic mods." }
];

export default function Services() {
    return (
        <div className="services-container">
            <h1> Our Services</h1>
            <div className="services-list">
                {servicesList.map((service) => (
                    <div key={service.id} className="service-card">
                        <h2>{service.name}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

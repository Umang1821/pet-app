import React from "react";
import "./Help.css";
import Appointment from "./Appointement";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const services = [
  { name: "Pet Shower", cost: 20 },
  { name: "Nail Cutting", cost: 10 },
  { name: "Vaccination", cost: 30 },
  { name: "Dental Cleaning", cost: 40 },
  { name: "Surgery", cost: 100 },
  { name: "Pet Sitting", cost: 600 },
];

function Services() {
  return (
    <div>
      <div className="home"><Link to="/UserHome" className="button">Go to Home</Link></div>
      <div className="services-container">
        <h2 className="services-heading">Services</h2>
        <div className="services-box">
          {services.map((service) => (
            <div className="service-parent">
              <p className="service-name">{service.name}</p>
              <p className="service-cost">Rs {service.cost}</p>
            </div>
          ))}
        </div>
      </div>
      <Appointment />
      <Footer />
    </div>
  );
}

export default Services;

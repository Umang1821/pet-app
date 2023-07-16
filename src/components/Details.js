import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Details.css";
import Pet from "../assets/paw.avif";
import Footer from "./Footer";

function CustomerForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePetNameChange = (e) => {
    setPetName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const customerData = {
      name,
      email,
      petName,
    };
    const customers = JSON.parse(localStorage.getItem("customers")) || [];
    customers.push(customerData);
    localStorage.setItem("customers", JSON.stringify(customers));
    setName("");
    setEmail("");
    setPetName("");
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/UserHome");
    }, 3000);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Pet})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="customer-form">
        <h2>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="petName">Pet Name:</label>
            <input
              type="text"
              id="petName"
              value={petName}
              onChange={handlePetNameChange}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
        {isSubmitted && (
          <p className="success-message">Form submitted successfully! Redirecting...</p>
        )}
      </div>
    </div>
  );
}

export default CustomerForm;

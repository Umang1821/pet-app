import React, { useState } from "react";
import "./Appointement.css";

function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // ...
    // Reset the form fields
    setName("");
    setEmail("");
    setSelectedDate("");
    setSelectedTime("");
    setIsSubmitted(true);
  };

  return (
    <div className="book-appointment-container">
      <h2>Book an Appointment</h2>
      {isSubmitted ? (
        <div className="success-message">Appointment booked successfully!</div>
      ) : (
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
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={selectedDate}
              onChange={handleDateChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={selectedTime}
              onChange={handleTimeChange}
              required
            />
          </div>
          <button type="submit">Book Appointment</button>
        </form>
      )}
    </div>
  );
}

export default Appointment;

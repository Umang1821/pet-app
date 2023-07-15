import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Adopt",
      image: "https://kcpetproject.org/wp-content/uploads/Adopt.png",
    },
    {
      title: "Donate",
      image: "https://kcpetproject.org/wp-content/uploads/donate-2.png",
    },
    {
      title: "Locations",
      image: "https://kcpetproject.org/wp-content/uploads/icon-map.png",
    },
    {
      title: "Animal Services",
      image: "https://kcpetproject.org/wp-content/uploads/Services.png",
    },
    {
      title: "Volunteer",
      image: "https://kcpetproject.org/wp-content/uploads/programs.png",
    },
    {
      title: "Foster",
      image: "https://kcpetproject.org/wp-content/uploads/adopt.png",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="Pets-people">Pets & People</h2>
      </div>
      <div className="ddiv">
        {" "}
        <p className="para">
          We care for over 14,000 animals a year and work with other animal
          welfare organizations to increase the number of homeless pets adopted
          and focus on lifesaving programs promoting pet retention,
          identification, lost pet reunions, and pet ownership education
          throughout the community.
        </p>
      </div>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

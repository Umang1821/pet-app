import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "https://www.petofy.com/banner3.png",
    "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/shopping_for_dogs_web_76d8aa95-a57a-4f9a-a1d7-d772633c96b0.jpg?v=1649756422",
    "https://imgscf.slidemembers.com/docs/1/1/341/premium_pet_care_service_marketing_presentation_ppt_340696.jpg",
    "https://imgscf.slidemembers.com/docs/1/1/341/premium_pet_care_service_marketing_presentation_ppt_340688.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h2 className="heading">For you</h2>
      </div>

      <button className="slider-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <img
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="slider-image"
      />
      <button className="slider-button next" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default Slider;

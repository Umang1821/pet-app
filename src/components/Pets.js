import React from "react";
import "./Pets.css";

function PetGallery() {
  const pets = [
    {
      name: "Fish",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-fish",
    },
    {
      name: "Dogs",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-dog",
    },
    {
      name: "Cats",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-cat",
    },
    {
      name: "Guineas",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-smallpet",
    },
    {
      name: "Birds",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-bird",
    },
    {
      name: "Reptiles",
      image:
        "https://assets.petco.com/petco/image/upload/f_auto,q_auto:best,dpr_2.0,w_132/shopbypet-prime-reptile",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="head">We will help you with</h2>
      </div>
      <div className="pet-gallery">
        {pets.map((pet, index) => (
          <div key={index} className="pet-item">
            <img src={pet.image} alt={pet.name} className="pet-image" />
            <h3 className="pet-name">{pet.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetGallery;

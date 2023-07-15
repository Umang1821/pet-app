import React from "react";
import "./Counter.css";

function Counter() {
  const counters = [
    { label: "Helped", count: 1000 },
    { label: "Adopted", count: 2500 },
    { label: "Cured", count: 50000 },
  ];

  return (
    <div
      className="Parent"
      style={{
        backgroundImage: `url(${"https://www.pngkit.com/png/detail/418-4186171_brother-wolf-animal-rescue-clipart-dog-cat-brother.png"})`,
        backgroundSize: "550px",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div className="Stats">
        <h2 className="Stats-heading">Stats</h2>
      </div>
      <div className="stats-counter">
        {counters.map((counter) => (
          <div className="counter-item">
            <h3 className="counter-label">{counter.label}</h3>
            <span className="counter-value">{counter.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
import React from "react";

function Skill({ title, rating, icon }) {
  return (
    <div className="skill">
      <p className="skill__label">
        <img src={`/assets/icons/${icon}`} alt={title} className="skill__icon" /> {title}
      </p>
      <div className="skill__rating">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`circle ${rating > i ? "circle--plain" : ""}`}></div>
        ))}
      </div>
    </div>
  );
}

export default Skill;

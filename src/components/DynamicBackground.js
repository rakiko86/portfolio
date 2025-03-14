import React, { useState } from "react";
import "../styles/pages/index.scss";

const DynamicBackground = () => {
  const [bgColor, setBgColor] = useState("#f4f7f6");

  const handleMouseEnter = () => {
    setBgColor("#007bff");
  };

  const handleMouseLeave = () => {
    setBgColor("#f4f7f6");
  };

  return (
    <div className="dynamic-background">
      <section
        className="hero-section"
        style={{ backgroundColor: bgColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-container">
          <div className="left-side">
            <img
              src="./src/images/mine.webp"
              alt="me"
              className="profile-img"
            />
            <p>Your Text Here</p>
          </div>
          <div className="right-side">
            <div className="download-cv">
              <a href="./src/files/CV.pdf" download>
                <button className="download-button">CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DynamicBackground;

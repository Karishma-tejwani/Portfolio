import React from "react";
import home from "../../assets/home.png";
import "../Skills/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="logo">
        <div className="main-img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img src={home} alt="background" />
      </div>
    </div>
  );
}

window.addEventListener("load", function () {
  const toggle = document.querySelector(".main-img");
  if (toggle) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active");
    });
  }
});

export default Skills;

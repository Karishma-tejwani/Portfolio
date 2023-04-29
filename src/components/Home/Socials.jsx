import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Socials() {
  return (
    <div className="social-icon">
      <a
        href="https://www.linkedin.com/in/karishma-tejwani-5424a2153/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Karishma-tejwani" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default Socials;

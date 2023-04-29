import React from "react";
import { Link, NavLink } from "react-router-dom";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
import { GoThreeBars } from "react-icons/go";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav_container">
        <Link to={"/"} className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navLinks">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/skills"}>Skills</NavLink>
          </li>
          <li>
            <NavLink to={"/experience"}>Experience</NavLink>
          </li>
          <li>
            <NavLink to={"/projects"}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          {/* <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/karishma-tejwani-5424a2153/"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/Karishma-tejwani" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
          </span> */}
        </ul>
        <button className="nav_toggle_btn">
          <GoThreeBars />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

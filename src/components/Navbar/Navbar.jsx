import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "../Navbar/navbar.css";

const Navbar = () => {
  const [isShow, setShow] = useState(false);

  return (
    <nav>
      <div className="container nav_container">
        <a href="#" onClick={() => setShow(false)} className="logo">
          <img src={logo} alt="logo" />
        </a>
        <ul
          className={`navLinks ${isShow ? "show_nav" : "hide_nav"}`}
          onClick={() => setShow((prev) => !prev)}
        >
          <li>
            <a
              href="#"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setShow("#about")}
              className={isShow === "#about" ? "active-nav" : ""}
              // className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={({ isActive }) => (isActive ? "active-nav" : "")}
            >
              Contact
            </a>
          </li>
        </ul>
        <button
          className="nav_toggle_btn"
          onClick={() => setShow((prev) => !prev)}
        >
          {isShow ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};
export default Navbar;

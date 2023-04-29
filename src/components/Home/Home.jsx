import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Home/home.css";
import profile from "../../assets/profile.png";
import Socials from "./Socials";

function Home() {
  const navigate = useNavigate();

  const navigation = () => {
    navigate("/contact");
  };

  return (
    <header className="home">
      <div className="container home_container">
        <div className="home-left">
          <h3 style={{ color: "var(--color-light)" }}>Hello I'm</h3>
          <h1>Karishma Tejwani</h1>
          <h3 style={{ color: "gray" }}>Front-end Developer</h3>
          <button className="btn" onClick={() => navigation()}>
            Let's Connect
          </button>
          <Socials />
        </div>
        <div className="home-right">
          <div className="home-circle"></div>
          <div className="home-img">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import profile from "../../assets/profile.png";

function Home() {
  return (
    <header className="home">
      <div className="container home_container">
        <div className="home-left">
          <h1>FrontEnd Developer</h1>
          <p>
            lorem loremloremloremloremloremloremloremloremlorem
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
          </p>
          <Link to={"/contact"} className="btn">
            Let's Connect
          </Link>
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

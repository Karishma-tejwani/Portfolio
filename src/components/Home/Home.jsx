import React, { useEffect } from "react";
import profile from "../../assets/profile.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../Home/home.css";

function Home() {
  useEffect(() => {
    const alphbets = document.getElementsByClassName("home__alphabet");
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener("animationend", function () {
        alphbets[i].classList.remove("alphabet-animated");
      });

      alphbets[i]?.addEventListener("mouseover", function () {
        alphbets[i].classList.add("alphabet-animated");
      });
    }
  }, []);

  return (
    <header className="home">
      <div className="home_container">
        <div className="home__intro">
          <p className="home__intro-title">
            <span className="home__intro-line" data-aos="fade-down"></span>
            Hello, I am Karishma Tejwani
          </p>
          <p className="home__animated-alphabet-box">
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              F
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              R
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              O
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              N
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              T
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              E
            </span>
            <span
              className="home__alphabet"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              N
            </span>
            <span
              className="home__alphabet home__alphabet--last"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              D
            </span>
            <span
              className="home__developer-text"
              data-aos="zoom-out-down"
              data-aos-delay="1800"
            >
              <span className="home__dev-text">Developer</span>
            </span>
          </p>

          <div
            className="home__description"
            data-aos="fade"
            data-aos-delay="1800"
          >
            <p>
              I'm a passionate and responsible Front-end Developer, with 2+
              years of experience. Skilled in developing highly responsive
              websites with elegant and efficient code.
            </p>
          </div>

          <div className="home__buttons">
            <a className="home__know-btn" href="#about">
              Know more
            </a>
            <a className="home__contact-btn" href="#contact">
              Contact Me
            </a>
            <div className="home__social">
              <p className="home__linkedin">
                <a
                  href="https://www.linkedin.com/in/karishma-tejwani-5424a2153/"
                  target="_blank"
                >
                  <BsLinkedin size={30} />
                </a>
              </p>

              <p className="home__github">
                <a href="https://github.com/Karishma-tejwani" target="_blank">
                  <BsGithub size={30} />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="home-right">
          <div className="home-circle"></div>
          <div className="home-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;

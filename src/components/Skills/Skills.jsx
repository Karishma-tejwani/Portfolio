import React, { useEffect } from "react";
import "../Skills/skills.css";

// Importing TagCloud for  3D Rotating Text Sphere
import TagCloud from "TagCloud";

const Skill = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const container = ".tagcloud";
    let radii;

    return () => {
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "Reactjs",
        "Nextjs",
        "BootStrap5",
        "Material UI",
        "Ant Design",
        "JIRA",
        "Figma",
        "GIT",
        "GITHUB",
      ];

      // Decrasing 'radius' value for small screen devices
      function radiusValue() {
        if (window.screen.width <= 778) {
          radii = 150;
        } else {
          radii = 290;
        }
        return radii;
      }

      const options = {
        radius: radiusValue(),
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
      <div className="skill">
        <div className="skill__main-container">
          <div className="skill__header" id="skill__heading">
            <h1>Skills</h1>
          </div>
          <div className="skill__inner-container">
            <div className="skill__info">
              <div className="skill__details-container">
                <div className="skill__details">
                  <h4>FRONT-END DEVELOPEMENT</h4>
                  <ul>
                    <li>
                      <span>HTML5, CSS3</span>
                    </li>
                    <li>
                      <span>JavaScript, ES5, ES6</span>
                    </li>
                    <li>
                      <span>
                        <b>Preprocessors:</b> SASS
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Frameworks & Libraries:</b> &nbsp; ReactJS, NextJS
                      </span>
                    </li>
                    <li>
                      <span>Redux</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>DATABASES</h4>
                  <ul>
                    <li>
                      <span>MySQL</span>
                    </li>
                    <li>
                      <span>MongoDB</span>
                    </li>
                    <li>
                      <span>Oracle</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>DESIGN</h4>
                  <ul>
                    <li>
                      <span>Figma</span>
                    </li>
                    <li>
                      <span>BootStrap5</span>
                    </li>
                    <li>
                      <span>Material UI</span>
                    </li>
                    <li>
                      <span>Ant Design</span>
                    </li>
                  </ul>
                </div>
                <div className="skill__details">
                  <h4>Tools</h4>
                  <ul>
                    <li>
                      <span>GIT</span>
                    </li>
                    <li>
                      <span>GITHUB</span>
                    </li>
                    <li>
                      <span>JIRA</span>
                    </li>
                    <li>
                      <span>ZenHub</span>
                    </li>
                    <li>
                      <span>Postman</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3D Text Cloud  */}
            <div className="skill__cloud">
              <div
                className="tagcloud"
                data-aos="zoom-in-up"
                data-aos-offset="150"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;

import React from "react";
import "../Projects/projects.css";
import image1 from "../../assets/contact.jpg";

function Projects() {
  const data = [
    {
      id: 1,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 2,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 3,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 4,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 5,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
    {
      id: 6,
      image: image1,
      title: "Project Title",
      code: "https://github.com",
      demo: "https://github.com",
    },
  ];

  return (
    <section id="portfolio">
      <h1>Projects</h1>
      <div className="container project_container">
        {data.map(({ id, image, title, code, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_img">
                <img src={image} alt="project" />
              </div>
              <h3>{title}</h3>
              <div className="project_item_cta">
                <a href={code} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

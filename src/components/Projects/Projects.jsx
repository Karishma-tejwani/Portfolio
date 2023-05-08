import React from "react";
import movie from "../../assets/movie.PNG";
import fashion from "../../assets/fashion.png";
import fyp from "../../assets/fyp.png";
import dashboard from "../../assets/dashboard.PNG";
import food from "../../assets/food.PNG";
import game from "../../assets/game.PNG";
import "../Projects/projects.css";

function Projects() {
  const data = [
    {
      id: 1,
      image: movie,
      title: "Movie Nation",
      code: "https://github.com/Karishma-tejwani/MovieNation",
      demo: "https://movie-nation.vercel.app/",
    },
    {
      id: 2,
      image: fashion,
      title: "Karishma's Makeup Studio",
      code: "https://drive.google.com/file/d/1ed9_jTek85_jOpVUBIaraVkG4b7AjaiD/view?usp=share_link",
      demo: "https://drive.google.com/file/d/1ed9_jTek85_jOpVUBIaraVkG4b7AjaiD/view?usp=share_link",
    },
    {
      id: 3,
      image: fyp,
      title: "Quick Repair For Home",
      code: "https://github.com/Karishma-tejwani/Quick_Repair",
      demo: "https://drive.google.com/drive/folders/1eaWPpo9VIoyLy3Gw0_FfXIVmJZJQ_u_d?usp=sharing",
    },
    {
      id: 4,
      image: dashboard,
      title: "Record Master",
      code: "https://github.com/Karishma-tejwani/admin-dashboard",
      demo: "https://drive.google.com/file/d/1jWOSI5TdRfBPw2_APoJihO3kNcpznIDt/view?usp=sharing",
    },
    {
      id: 5,
      image: food,
      title: "Food Ordering",
      code: "https://github.com/Karishma-tejwani/food-ordering",
      demo: "https://github.com/Karishma-tejwani/food-ordering",
    },
    {
      id: 6,
      image: game,
      title: "Break Bricks Game",
      code: "https://github.com/Karishma-tejwani/break-bricks",
      demo: "https://github.comhttps://break-bricks.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="container project_container">
        {data.map(({ id, image, title, code, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_img">
                <img src={image} alt="project" />
              </div>
              <h3>{title}</h3>
              <div className="project_buttons">
                <a href={code} className="git-btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="demo-btn" target="_blank">
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

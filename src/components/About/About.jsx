import about from "../../assets/about.jpg";
import { TbAward, TbUsers } from "react-icons/tb";
import { VscFolderActive } from "react-icons/vsc";
import "../About/about.css";

function About() {
  return (
    <section id="about">
      <h1 className="about-heading" data-aos="fade-up" data-aos-delay="200">
        About Me
      </h1>

      <div className="container about_container">
        <div className="about">
          <div className="about_img">
            <img
              src={about}
              alt="about image"
              data-aos="zoom-in"
              data-aos-delay="100"
            />
          </div>
        </div>

        <div className="about_content">
          <div className="cards">
            <article className="card">
              <center>
                <TbAward className="about_icon" />
              </center>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>

            <article className="card">
              <center>
                <TbUsers className="about_icon" />
              </center>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="card">
              <center>
                <VscFolderActive className="about_icon" />
              </center>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
            I am a front-end developer with a passion for exploration and a
            solid drive to take on challenges. With an open and motivated
            mindset, I seek out new opportunities to push the boundaries of my
            skills and knowledge.
          </p>
          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

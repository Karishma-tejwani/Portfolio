import about from "../../assets/about.jpg";
import { TbAward, TbUsers } from "react-icons/tb";
import { VscFolderActive } from "react-icons/vsc";
import "../About/about.css";

function About() {
  return (
    <section id="about">
      <h1 className="about-heading">About Me</h1>

      <div className="container about_container">
        <div className="about">
          <div className="about_img">
            <img src={about} alt="about image" />
          </div>
        </div>

        <div className="about_content">
          <div className="cards">
            <article className="card">
              <center>
                <TbAward className="about_icon" />
              </center>
              <h5>Experience</h5>
              <small>3+ years</small>
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
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown Lorem ipsum, or lipsum as it is sometimes
            known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown Lorem ipsum, or
            lipsum as it is sometimes known, is dummy text used in laying out
            print, graphic or web designs. The passage is attributed to an
            unknown
          </p>
          <a href="#contact" className="btn btn-primary btn">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

import about from "../../assets/about.jpg";
import { TbAward, TbUsers } from "react-icons/tb";
import { VscFolderActive } from "react-icons/vsc";
import "../About/about.css";

function About() {
  return (
    <>
      <h1 className="about-heading text-center">About Me</h1>
      <div className="about_container my-5">
        <div className="about">
          <div className="about_img">
            <img src={about} alt="about image" />
          </div>
        </div>

        <div className="about_content">
          <div className="cards">
            <div className="card">
              <center>
                <TbAward className="about_icon" />
              </center>
              <h5>Experience</h5>
              <small>3+ years</small>
            </div>

            <div className="card">
              <center>
                <TbUsers className="about_icon" />
              </center>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </div>

            <div className="card">
              <center>
                <VscFolderActive className="about_icon" />
              </center>
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </div>
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
          <a href="#contact" className="btn btn-primary">
            Let's connect
          </a>
        </div>
      </div>
    </>
  );
}

export default About;

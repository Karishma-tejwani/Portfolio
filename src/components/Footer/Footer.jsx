import { Container, Row, Col } from "react-bootstrap";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import logo from "../../assets/logo.png";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/karishma-tejwani-5424a2153/">
                <img src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/Karishma-tejwani">
                <img src={github} alt="github" />
              </a>
            </div>
            <p>&copy; copyright 2023. All Rights are Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;

import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center container">
          <Col size={10} sm={5}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={10} sm={5} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ankitaupa/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/ankita.upadhyay.585112/"><img src={navIcon2} alt="Facebook" /></a>
              <a href="https://www.instagram.com/anki._vibes/"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>ankitaupadhyaya209@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
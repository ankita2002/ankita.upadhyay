import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/aryanlogo.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center container">
          <Col size={10} sm={5}>
          <p>aryanjadhav98@gmail.com</p>
          </Col>
          <Col size={10} sm={5} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aryanjadhav26/"><img src={navIcon1} alt="LinkedIn" /></a>
              
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
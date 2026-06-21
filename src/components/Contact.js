import { Container, Row, Col } from "react-bootstrap"; 
import contactImg from "../assets/img/contact-img.svg"; 
import "animate.css"; 
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const email = "aryanjadhav98@gmail.com";

  const linkedinUrl = "https://www.linkedin.com/in/aryanjadhav26/";
  const githubUrl = "https://github.com/ankita2002/ankita.upadhyay";
  //const codechefUrl = "https://www.codechef.com/users/ankita2008";
  //const leetcodeUrl = "https://leetcode.com/u/ankita2008/";
  //const kaggleUrl = "https://www.kaggle.com/ankita2002";
  const Resume = "https://drive.google.com/drive/u/0/folders/1wr4bm2Gz5YfTk3YDRH0u9bItflRINrs0";
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn contact-img" : "contact-img"}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <>
                  <h2 className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    Get In Touch
                  </h2>

                  <div className="contact-grid">

                    <div className="contact-card" onClick={handleEmailClick}>
                      <button type="button">
                        <span>Send Email</span>
                      </button>
                    </div>

                    <div
                      className="contact-card"
                      onClick={() => window.open(linkedinUrl, "_blank")}
                    >
                      <button type="button">
                        <span>Connect on LinkedIn</span>
                      </button>
                    </div>

                  </div>
                  {/* NEW SOCIAL SECTION */}
                  {/* NEW ABOUT SECTION */}
<div className="social-section">
  <h3>Know More About Me</h3>

  <div className="social-grid">

    <div className="social-card-text">
      <strong>Name: </strong> Aryan Abhijeet Jadhav
    </div>

    <div className="social-card-text">
      <strong>Email: </strong> aryanjadhav98@gmail.com
    </div>

    <div className="social-card-text">
      <strong>Phone: </strong> +49 152 18 33 64 43
    </div>

    <div className="social-card-text">
      <strong>Location: </strong> Darmstadt, Germany
    </div>

    <a 
      href={githubUrl} 
      target="_blank" 
      rel="noreferrer" 
      className="social-card"
    >
      GitHub
    </a>

  </div>
</div>

                  {/* RESUME SECTION */}
                  <div className="resume-section">
                    <h3>View My Resume</h3>

                    <div className="resume-card">
                      <a href={Resume} target="_blank" rel="noreferrer">
                        View Resume
                      </a>
                    </div>
                  </div>
                </>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
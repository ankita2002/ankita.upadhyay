import { Container, Row, Col } from "react-bootstrap"; 
import contactImg from "../assets/img/contact-img.svg"; 
import "animate.css"; 
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const email = "ankitaupadhyayaa@gmail.com";

  const linkedinUrl = "https://www.linkedin.com/in/ankitaupa/";
  const githubUrl = "https://github.com/ankita2002/ankita.upadhyay";
  const codechefUrl = "https://www.codechef.com/users/ankita2008";
  const leetcodeUrl = "https://leetcode.com/u/ankita2008/";
  const kaggleUrl = "https://www.kaggle.com/ankita2002";
  const Resume = "https://drive.google.com/file/d/1UMBPeNljAjAbHZa6ZfLsaPykANNeEusu/view?usp=sharing";

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
                  <div className="social-section">
                    <h3>View My Socials</h3>

                    <div className="social-grid">

                      <a href={githubUrl} target="_blank" rel="noreferrer" className="social-card">
                        GitHub
                      </a>

                      <a href={codechefUrl} target="_blank" rel="noreferrer" className="social-card">
                        CodeChef
                      </a>

                      <a href={leetcodeUrl} target="_blank" rel="noreferrer" className="social-card">
                        LeetCode
                      </a>

                      <a href={kaggleUrl} target="_blank" rel="noreferrer" className="social-card">
                        Kaggle
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
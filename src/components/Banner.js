import { useState, useEffect } from "react";
import { Container, Nav, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/aryan.jpeg";
import { NavBar } from "./NavBar";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
 // const toRotate = [ "Software Engineer", "AI/ML Enthusiast" ];
  const period = 2000;
  const Resume = "https://drive.google.com/drive/u/0/folders/1wr4bm2Gz5YfTk3YDRH0u9bItflRINrs0";

/*
  useEffect(() => {
    let ticker = setInterval(() => {
      //tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])
/*
  const tick = () => {
    // let i = loopNum % toRotate.length;
    // let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    // setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
*/
  const handleConnectButtonClick = () => {
    <Nav.Link href="#connect"></Nav.Link>
};

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I am Aryan Abhijeet Jadhav, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I am a Master’s student in Electrical Engineering and Information Technology, focusing on communication systems and RF
measurement techniques. My academic work covers wireless technologies such as 5G, IoT, and VoLTE, and I have hands-on
experience with mixed-signal setups, spectrum analyzers,VNAs, and MATLAB/Python workflows for signal processing and
system characterization.
I am driven to analyse mixed-signal behaviour and derive insights from measurement data. With a strong willingness to learn
and a methodical work style, I am motivated to contribute to RF characterization, mixed-signal measurement development,
and modelling
                  </p>     
                  {/* RESUME SECTION */}
                  <div className="resume-section">
                    <div className="resume-card">
                      <a href={Resume} target="_blank" rel="noreferrer">
                        View Resume
                      </a>
                    </div>
                  </div>          
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : "" }>
                  <img className="profile" src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
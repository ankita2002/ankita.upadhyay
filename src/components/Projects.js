import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Saathi",
      description: "Web Development & Machine Learning",
      imgUrl: projImg1,
    },
    {
      title: "Luxa",
      description: "E-Commerce Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Luxa",
      description: "E-Commerce Web Development",
      imgUrl: projImg2,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("first"); // State to track active tab

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if screen width is less than or equal to 768px
    };

    handleResize(); // Call the function once to set the initial state

    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const tabs = [
    { eventKey: "first", label: "Projects" },
    { eventKey: "second", label: "Achievements" },
    { eventKey: "third", label: "Work Experience" }
  ];

  const handleSlideChange = (newIndex) => {
    const newTabKey = tabs[newIndex]?.eventKey || "first";
    setActiveTab(newTabKey);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Works</h2> <br></br>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {isMobile ? (
                      <Carousel
                        responsive={responsive}
                        infinite
                        className="nav-pills-carousel"
                        beforeChange={handleSlideChange}
                      >
                        {tabs.map((tab, index) => (
                          <Nav.Link
                            key={tab.eventKey}
                            eventKey={tab.eventKey}
                          >
                            {tab.label}
                          </Nav.Link>
                        ))}
                      </Carousel>
                    ) : (
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        {tabs.map(tab => (
                          <Nav.Item key={tab.eventKey}>
                            <Nav.Link eventKey={tab.eventKey}>{tab.label}</Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    )}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="Achievements">
                          <div className="achievement-container">
                            <div className="instagram-post">
                              <iframe
                                src="https://www.instagram.com/p/CoTzZfRKqni/embed/"
                                title="Instagram Post"
                                width="400"
                                height="400"
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                              ></iframe>
                              <div className="description">
                                <p>"Achieved 4th Rank at the IIT Bombay Rescon 2023 with my team, Amey Bhavsar and Deepanshu Yadav, for our AI chatbot project 'Saathi.' Proud moment showcasing our innovation at the national level."</p>
                              </div>
                            </div>
                            <div className="title-footer">
                              <h3>Rescon 2023 - 4th Rank, IIT Bombay</h3>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <div className="tab-pane-container">
                        <div class="container">
                        <div class="timeline-block timeline-block-right">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>Software Engineer - Zeus Learning</h3>
                                <span><b>Full Time:</b> Feb 2023 - June 2023</span>
                                <span><b>Experience:</b> 5 Months</span>
                                <span><b>Skills:</b> .Net, Php, NodeJS, Javascript, C#, HTML, CSS, Bootstrap, MySQL</span>
                                <span></span>
                                <p></p>
                            </div>
                        </div>

                        <div class="timeline-block timeline-block-left">
                            <div class="marker"></div>
                            <div class="timeline-content">
                                <h3>AI Intern - Lab Systems</h3>
                                <span><b>Internship:</b> Jul 2024 - Present</span>
                                <span><b>Experience:</b> 8 Months</span>
                                <span><b>Skills:</b> Python, Machine Learning, Deep Learning, Neural Networks, Pandas, OpenCv, Tensorflow, Keras, Seaborn</span>
                                <span></span>
                                <p></p>
                            </div>
                        </div>

                        </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProjectShowcase } from "./ProjectShowcase";
import { Achievements } from "./Achievements";
import { WorkExperience } from "./WorkExperience";
import { ResearchPublications } from "./ResearchPublications";

export const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const tabs = [
    { eventKey: "first", label: "Projects" },
    { eventKey: "second", label: "Achievements" },
    { eventKey: "third", label: "Work Experience" },
    { eventKey: "fourth", label: "Research" },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>My Works</h2> <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {isMobile ? (
                      <Carousel
                        responsive={responsive}
                        infinite
                        className="nav-pills-carousel"
                      >
                        {tabs.map((tab) => (
                          <Nav.Link key={tab.eventKey} eventKey={tab.eventKey}>
                            {tab.label}
                          </Nav.Link>
                        ))}
                      </Carousel>
                    ) : (
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        {tabs.map((tab) => (
                          <Nav.Item key={tab.eventKey}>
                            <Nav.Link eventKey={tab.eventKey}>
                              {tab.label}
                            </Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                    )}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <ProjectShowcase />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Achievements />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <WorkExperience />
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <ResearchPublications />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};

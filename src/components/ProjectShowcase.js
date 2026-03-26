/*import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";*
import { useState } from "react";*/
import { Row, Col } from "react-bootstrap";
import { projectsData } from "../components/ProjectData";

const ProjectItem = ({ project }) => {
  return (
    <Col xs={12} md={6} lg={6} className="mb-4">
      <div className="project-modern-card">
        <div className="project-modern-top">
          <span className="project-modern-date">{project.date}</span>
        </div>

        <h3 className="project-modern-title">{project.title}</h3>
        <h4 className="project-modern-subtitle">{project.subtitle}</h4>

        <p className="project-modern-description">{project.shortDescription}</p>

        <div className="project-modern-skills">
          {project.skills.map((skill, index) => (
            <span key={index} className="project-modern-tag">
              {skill}
            </span>
          ))}
        </div>

        <a
          href={`/projects/${project.slug}`}
          target="_blank"
          rel="noreferrer"
          className="project-modern-btn"
        >
          View More
        </a>
      </div>
    </Col>
  );
};

export const ProjectShowcase = () => {
  return (
    <section className="project-showcase-modern">
      <Row>
        {projectsData.map((project) => (
          <ProjectItem key={project.slug} project={project} />
        ))}
      </Row>
    </section>
  );
};
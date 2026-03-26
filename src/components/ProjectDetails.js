import { useParams } from "react-router-dom";
import { projectsData } from "../components/ProjectData";

export const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-detail-page">
        <div className="container">
          <h1>Project Not Found</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail-page">
      <div className="container">
        <div className="project-detail-card">
          <div className="project-left">
            <h1 className="project-title">{project.title}</h1>
            <h3 className="project-subtitle">{project.subtitle}</h3>

            <p className="project-date">{project.date}</p>

            <div className="project-skills-block">
              <h4>Skills</h4>
              <div className="project-skills">
                {project.skills?.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Code
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Live Demo
                </a>
              )}

              {project.publication && (
                <a
                  href={project.publication}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  Publication
                </a>
              )}
            </div>
          </div>

          <div className="project-right">
            <p className="project-summary">
              {project.shortDescription}
            </p>

            <div className="project-details">
              {project.details?.map((item, index) => (
                <div key={index} className="project-detail-item">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { useEffect, useState } from "react";
import "./Projects.scss";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  type: string;
  image: string;
  link: string;
  repository: string;
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    import("./projects.json").then((data) => {
      setProjects(data.default);
    });
  }, []);

  return (
    <div className="projects-container">
      <div className="projects">
        {/* Project map */}
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              className="project-image"
              alt={project.title}
            />

            <span>{project.type}</span>

            <span className="project-title">{project.title}</span>

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt className="project-icon" />
                  <span>View Website</span>
                </a>
              )}
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithubSquare className="project-icon" />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

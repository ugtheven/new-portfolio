import { useEffect, useState } from "react";
import "./Projects.scss";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
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
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-link">
              <a href={project.link} target="_blank" rel="noreferrer">
                Voir le projet
              </a>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}

export default Projects;

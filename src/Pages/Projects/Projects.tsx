import { useEffect, useState } from "react";
import "./Projects.scss";
import { Project } from "./Project.type";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

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
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

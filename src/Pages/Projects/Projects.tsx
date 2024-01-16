import { useEffect, useState } from "react";
import "./Projects.scss";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
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
        {/* Project map */}
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

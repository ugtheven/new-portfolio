import { useEffect, useState } from "react";
import "./Projects.scss";
import { Project } from "./Project.type";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { FaList } from "react-icons/fa";

// Assets
import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";
import nestLogo from "../../assets/nest.png";
import tsLogo from "../../assets/ts.png";
import angularLogo from "../../assets/angular.png";
import postgresLogo from "../../assets/postgres.png";

const techIcons: { [key: string]: string } = {
  ReactJS: reactLogo,
  Redux: reduxLogo,
  NestJS: nestLogo,
  Typescript: tsLogo,
  Angular: angularLogo,
  PostgreSQL: postgresLogo,
};

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  function handleFilter(clickedTechnology: string) {
    if (clickedTechnology === "Tous") {
      setSelectedTechnologies([]);
      return;
    }
    if (selectedTechnologies.includes(clickedTechnology)) {
      setSelectedTechnologies((selectedTechs) =>
        selectedTechs.filter(
          (selectedTech) => selectedTech !== clickedTechnology
        )
      );
    } else {
      setSelectedTechnologies((selectedTechs) => [
        ...selectedTechs,
        clickedTechnology,
      ]);
    }
  }

  function checkFilters(technologies: string[]) {
    return selectedTechnologies.every((tech) => {
      console.log("", tech, technologies);
      return technologies.includes(tech);
    });
  }

  useEffect(() => {
    import("./projects.json").then((data) => {
      setProjects(data.default);
    });
  }, []);

  return (
    <div className="projects-container">
      <div className="projects">
        {/* Page Title */}
        <h1 className="title">MES PROJETS</h1>

        {/* Filters */}
        <div className="filters">
          {/* No filter */}
          <button
            onClick={() => handleFilter("Tous")}
            className={`filter ${
              selectedTechnologies.length === 0 ? "selected" : ""
            }`}
          >
            <FaList className="icon" />
            <span>Tous</span>
          </button>

          {/* Selected filters */}
          {selectedTechnologies.map((tech, index) => (
            <button
              onClick={() => handleFilter(tech)}
              className={`filter selected`}
              key={index}
            >
              <img src={techIcons[tech]} alt={tech} className="icon tech-icon" />
              <span>{tech}</span>
            </button>
          ))}

          {/* Other options */}
          {Object.keys(techIcons).map(
            (tech, index) =>
              !selectedTechnologies.includes(tech) && (
                <button
                  onClick={() => handleFilter(tech)}
                  className={`filter`}
                  key={index}
                >
                  <img src={techIcons[tech]} alt={tech} className="icon tech-icon" />
                  <span>{tech}</span>
                </button>
              )
          )}
        </div>

        {/* Projects */}
        {projects
          .filter(
            (project) =>
              selectedTechnologies.length === 0 ||
              checkFilters(project.technologies)
          )
          .map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Projects;

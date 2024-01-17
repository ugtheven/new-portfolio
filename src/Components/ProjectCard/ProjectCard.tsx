import "./ProjectCard.scss";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { Project } from "../../Pages/Projects/Project.type";
import "./ProjectCard.scss";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

// Assets
import reactLogo from "../../assets/react.png";
import reduxLogo from "../../assets/redux.png";
import nestLogo from "../../assets/nest.png";
import tsLogo from "../../assets/ts.png";
import angularLogo from "../../assets/angular.png";
import postgresLogo from "../../assets/postgres.png";
import school from "../../assets/42.png";
import personnal from "../../assets/personnal.png";

const techIcons: { [key: string]: string } = {
  ReactJS: reactLogo,
  Redux: reduxLogo,
  NestJS: nestLogo,
  Typescript: tsLogo,
  Angular: angularLogo,
  PostgreSQL: postgresLogo,
};

function ProjectCard({ project }: { project: Project }) {
  function selectTechIcon(technology: string) {
    const techKey = technology;
    return techIcons[techKey];
  }

  return (
    <div className="project-card">
      {/* Carousel */}
      <ImageCarousel images={project.images} />

      <div className="content">
        {/* Badges */}
        <div className="header">
          {/* Type badge */}
          <span className="project-type">
            {project.type === "Projet personnel" ? (
              <img src={personnal} alt="personnal" className="icon" />
            ) : (
              <img src={school} alt="school" className="icon" />
            )}
            {project.type}
          </span>

          {/* Technologies badges */}
          <div className="technologies">
            {project.technologies.map((technology, index) => (
              <span key={index} className="technology">
                <img
                  src={selectTechIcon(technology)}
                  alt={technology}
                  className="icon"
                />
              </span>
            ))}
          </div>
        </div>

        {/* Title and description */}
        <span className="project-title">{project.title}</span>
        <p className="project-description">{project.description}</p>

        {/* Links */}
        <div className="project-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt className="project-left-icon" />
              <span>Voir le site</span>
            </a>
          )}
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span>Voir le repo</span>
            <FaGithubSquare className="project-right-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

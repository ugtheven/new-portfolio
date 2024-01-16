import "./ProjectCard.scss";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { Project } from "../../Pages/Projects/Project.type";
import "./ProjectCard.scss";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      {/* Carousel */}
      <ImageCarousel images={project.images} />

      <div className="content">
        {/* Type badge */}
        <span className="project-type">{project.type}</span>

        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index} className="project-technology">
              {technology}
            </span>
          ))}
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

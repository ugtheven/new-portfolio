import "./ProjectCard.scss";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";
import { Project } from "../../Pages/Projects/Project.type";
import './ProjectCard.scss';

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div className="project-card" key={index}>
      <img src={project.image} className="project-image" alt={project.title} />

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
            <span>Voir le site</span>
          </a>
        )}
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <FaGithubSquare className="project-icon" />
          <span>Repo Github</span>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
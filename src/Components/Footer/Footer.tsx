import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Socials links */}
      <div className="socials">
        <span>MES RESEAUX</span>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/ugo-theveny/"
            className="social-link"
          >
            <FaLinkedin className="social-icon" />
            LinkedIn
          </a>
          -
          <a href="https://github.com/ugtheven" className="social-link">
            <FaGithubSquare className="social-icon" />
            Github
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="contact">
        <span>COMMENT ME JOINDRE ?</span>
        <div className="infos">
          <div>
            <FaPhoneAlt className="social-icon" />
            <span>ugotheveny@gmail.com</span>
          </div>
          -
          <div>
            <span>06 34 44 49 37</span>
          </div>
        </div>
      </div>

      {/* "Copyright" */}
      <div className="endbar">
        <p>
          © 2024 conçu et mis en ligne par{" "}
          <a href="https://github.com/ugtheven">@ugtheven</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

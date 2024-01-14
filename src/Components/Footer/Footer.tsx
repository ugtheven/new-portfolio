import { FaGithubSquare, FaLinkedin, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import "./Footer.scss";
import ContactForm from "../ContactForm/ContactForm";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        {/* Socials links */}
        <div className="socials">
          <span className="title">MES RESEAUX</span>
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
        {/* Contact infos */}
        <div className="contact">
          <span className="title">COMMENT ME JOINDRE ?</span>
          <div className="infos">
            <div>
              <FaMailBulk className="social-icon" />
              <span>ugotheveny@gmail.com</span>
            </div>
            <div>
              <FaPhoneAlt className="social-icon" />
              <span>06 34 44 49 37</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <ContactForm />
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

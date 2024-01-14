import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import "./Footer.scss";
import { ValidationError, useForm } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("mbjnlkyp");

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

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Nom</label>
            <input id="name" type="name" name="name" />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea id="message" name="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
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

import "./Home.scss";
import logo from "../../assets/logo.png";
import arrowDown from "../../assets/arrow-down.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Home() {
  const ScrollToContactForm = () => {
    const form = document.querySelector(".form");
    form?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="home-container">
      {/* Premiere section */}
      <div className="landing">
        <div className="content">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">@ugtheven</h1>
          <h2 className="subtitle">Developpeur Front-End React Junior</h2>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/ugo-theveny/"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/ugtheven" className="social-link">
              <FaGithubSquare className="social-icon" />
            </a>
          </div>

          <img src={arrowDown} alt="arrow down" className="more" onClick={ScrollToContactForm} />
        </div>
      </div>
    </div>
  );
}

export default Home;

import "./Home.scss";
import logo from "../../assets/logo.png";
import waveMobile from "../../assets/wave-mobile.png";
import waveDesktop from "../../assets/wave-desktop.png";
import arrowDown from "../../assets/arrow-down.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import waveBlackMobile from "../../assets/wave-mobile-black.png";
import waveBlackDesktop from "../../assets/wave-desktop-black.png";

function Home() {
  const ScrollToNextSection = () => {
    const aboutMe = document.querySelector(".about-me");
    aboutMe?.scrollIntoView({ behavior: "smooth" });
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

          <img src={arrowDown} alt="arrow down" className="more" onClick={ScrollToNextSection} />
        </div>

        <img src={waveMobile} alt="wave" className="wave-mobile" />
        <img src={waveDesktop} alt="wave" className="wave-desktop" />
      </div>

      {/* Deuxieme section */}
      <div className="about-me">
        <h3 className="section-title">A propos de moi</h3>
        <p className="section-text">
          Je suis un développeur front-end React junior basé à Paris, France.
          J'ai une passion pour le développement web et la création d'interfaces
          utilisateur qui apportent de la valeur aux utilisateurs.
        </p>
        <img src={waveBlackMobile} alt="wave" className="wave-mobile" />
        <img src={waveBlackDesktop} alt="wave" className="wave-desktop" />
      </div>
    </div>
  );
}

export default Home;

// Imports
import { useEffect, useState } from "react";
import "./Navbar.scss";

// Assets
import logo from "../../assets/logo.png";

// Icons
import {
  FaHome,
  FaPaintBrush,
  FaEnvelopeOpenText,
  FaFileDownload,
} from "react-icons/fa";
import { IoBarChart } from "react-icons/io5";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      requestAnimationFrame(() => {
        setMenuAnimation(true);
      });
    } else {
      setMenuAnimation(false);
    }
  }, [isMenuOpen]);

  const ScrollToContactForm = () => {
    const form = document.querySelector(".form");
    form?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <div className="content">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        <div className="links">
          {/* Desktop Link 1 */}
          <NavLink className="desktop-link" to="/">
            Accueil
          </NavLink>
          {/* Desktop Link 2 */}
          <NavLink className="desktop-link" to="/resume">
            Experiences
          </NavLink>
          {/* Desktop Link 3 */}
          <NavLink className="desktop-link" to="/skills">
            Competences
          </NavLink>
          {/* Desktop Link 4 */}
          <NavLink className="desktop-link" to="/projects">
            Projets
          </NavLink>
          {/* Desktop Link 5 */}
          <a className="desktop-link" onClick={ScrollToContactForm}>
            Contact
          </a>
        </div>

        {/* Download CV Button */}
        <a href="UgoTHEVENY_FR_CV.pdf" className="download-button">
          <FaFileDownload className="download-icon" />
          <span>CV</span>
        </a>

        {/* Hamburger Button */}
        <div
          className={`menu-button ${
            isMenuOpen && menuAnimation ? "" : "rotate"
          }`}
          onClick={() => setIsMenuOpen(true)}
        >
          <RiMenuUnfoldFill className="menu-icon" />
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className={`mobile-menu ${menuAnimation ? "opened" : ""}`}>
            {/* Close button */}
            <div
              className={`close-button ${menuAnimation ? "rotate" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <RiMenuFoldFill className="close-icon" />
            </div>

            <div className="cards">
              {/* Mobile Link 1 */}
              <NavLink to="/" className="card">
                <FaHome className="link-icon" />
                <span>Accueil</span>
              </NavLink>
              {/* Mobile Link 2 */}
              <NavLink to="/resume" className="card">
                <MdBusinessCenter className="link-icon" />
                <span>Experiences</span>
              </NavLink>
              {/* Mobile Link 3 */}
              <NavLink to="/skills" className="card">
                <IoBarChart className="link-icon" />
                <span>Competences</span>
              </NavLink>
              {/* Mobile Link 4 */}
              <NavLink to="/projects" className="card">
                <FaPaintBrush className="link-icon" />
                <span>Projets</span>
              </NavLink>
              {/* Mobile Link 5 */}
              <a onClick={ScrollToContactForm} className="card">
                <FaEnvelopeOpenText className="link-icon" />
                <span>Contact</span>
              </a>
              {/* Mobile Link 6 */}
              <a href="UgoTHEVENY_FR_CV.pdf" className="card">
                <FaFileDownload className="link-icon" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

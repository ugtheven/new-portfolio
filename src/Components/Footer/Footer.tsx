import "./Footer.scss";

import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} alt="" />
        <span>© 2024 conçu et mis en ligne par <a href="https://github.com/ugtheven">@ugtheven</a></span>
    </footer>
  );
};

export default Footer;

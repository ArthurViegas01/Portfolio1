import React from "react";
import "./footer.css";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footerContainer container">
        <h1 className="footerTitle">Arthur Viegas</h1>

        <ul className="footerList">
          <li>
            <a href="#about" className="footerLink">
              {t.footer.about}
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footerLink">
              {t.footer.projects}
            </a>
          </li>
        </ul>

        <div className="footerSocial">
          <a
            href="https://github.com/arthurpviegas"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/arthur-viegas"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://www.instagram.com/arthurviegaseu"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>

        <span className="footerCopy">{t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer container">
        <h1 className="footerTitle">Arthur Viegas</h1>

        <ul className="footerList">
          <li>
            <a href="#about" className="footerLink">
              Sobre mim
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footerLink">Projetos</a>
          </li>
        </ul>

        <div className="footerSocial">
          <a
            href="https://www.facebook.com/arthur.viegas.3/"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/arthurviegaseu"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            className="footerSocial-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footerCopy">&#169; Arthur Pereira Viegas. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*=============== Change background ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scrollHeader");
    else header.classList.remove("scrollHeader");
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="navLogo">
          Arthur Viegas
        </a>

        <div className={Toggle ? "navMenu show-menu" : "navMenu"}>
          <ul className="navList grid">
            <li className="navItem">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-estate navIcon"></i>Home
              </a>
            </li>
            <li className="navItem">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-file-alt navIcon"></i>Habilidades
              </a>
            </li>

            <li className="navItem">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-briefcase-alt navIcon"></i>Serviços
              </a>
            </li>

            <li className="navItem">
              <a
                href="#qualification"
                onClick={() => setActiveNav("#qualification")}
                className={
                  activeNav === "#qualification" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-user navIcon"></i>Qualificações
              </a>
            </li>

            <li className="navItem">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-scenery navIcon"></i>Portfolio
              </a>
            </li>

            <li className="navItem">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "navLink active-link" : "navLink"
                }
              >
                <i className="uil uil-message navIcon"></i>Contato
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times navClose"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="navToggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;

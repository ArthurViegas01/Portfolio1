import React, { useState, useEffect } from "react";
import "./header.css";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { lang, toggleLang, t } = useLanguage();

  /*=============== Change background on scroll ===============*/
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scrollHeader");
      else header.classList.remove("scrollHeader");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*=============== Dark Mode ===============*/
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleNavClick = (section) => {
    setActiveNav(section);
    showMenu(false);
  };

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
                onClick={() => handleNavClick("#home")}
                className={activeNav === "#home" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-estate navIcon"></i>{t.nav.home}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#skills"
                onClick={() => handleNavClick("#skills")}
                className={activeNav === "#skills" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-file-alt navIcon"></i>{t.nav.skills}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#services"
                onClick={() => handleNavClick("#services")}
                className={activeNav === "#services" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-briefcase-alt navIcon"></i>{t.nav.services}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#qualification"
                onClick={() => handleNavClick("#qualification")}
                className={activeNav === "#qualification" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-user navIcon"></i>{t.nav.qualification}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#portfolio"
                onClick={() => handleNavClick("#portfolio")}
                className={activeNav === "#portfolio" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-scenery navIcon"></i>{t.nav.portfolio}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#casestudy"
                onClick={() => handleNavClick("#casestudy")}
                className={activeNav === "#casestudy" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-sitemap navIcon"></i>{t.nav.casestudy}
              </a>
            </li>
            <li className="navItem">
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className={activeNav === "#contact" ? "navLink active-link" : "navLink"}
              >
                <i className="uil uil-message navIcon"></i>{t.nav.contact}
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times navClose"
            onClick={() => showMenu(false)}
          ></i>
        </div>

        <div className="navActions">
          <button
            className="navLangToggle"
            onClick={toggleLang}
            aria-label="Toggle language"
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            className="navThemeToggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Alternar tema"
            title={darkMode ? "Modo claro" : "Modo escuro"}
          >
            <i className={darkMode ? "uil uil-sun" : "uil uil-moon"}></i>
          </button>

          <div className="navToggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

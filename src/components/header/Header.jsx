import React, { useState } from 'react'
import "./header.css";

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="navLogo">Arthur</a>

        <div className={Toggle ? "navMenu show-menu" : "navMenu"}>
          <ul className="navList grid">
            <li className="navItem">
              <a href="#home" className="navLink active-link">
                <i className="uil uil-estate navIcon"></i>Home
              </a>
            </li>

            <li className="navItem">
              <a href="#sobre" className="navLink">
                <i className="uil uil-user navIcon"></i>Sobre
              </a>
            </li>

            <li className="navItem">
              <a href="#skills" className="navLink">
                <i className="uil uil-file-alt navIcon"></i>Habilidades
              </a>
            </li>

            <li className="navItem">
              <a href="#servicos" className="navLink">
                <i className="uil uil-briefcase-alt navIcon"></i>Serviços
              </a>
            </li>

            <li className="navItem">
              <a href="#portfolio" className="navLink">
                <i className="uil uil-scenery navIcon"></i>Portfolio
              </a>
            </li>

            <li className="navItem">
              <a href="#contato" className="navLink">
                <i className="uil uil-message navIcon"></i>Contato
              </a>
            </li>
          </ul>

          <i className="uil uil-times navClose" 
          onClick={() => showMenu(!Toggle)}></i>

          
        </div>

        <div className="navToggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
      </nav>
    </header>
  )
}

export default Header
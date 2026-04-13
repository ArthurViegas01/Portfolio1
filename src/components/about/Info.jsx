import React from "react";

const Info = () => {
  return (
    <div className="aboutInfo grid">
      <div className="aboutBox">
        <i className="bx bx-award aboutIcon"></i>
        <h3 className="aboutTitle">Experiência</h3>
        <span className="aboutSubtitle">
           4 anos atuando como desenvolvedor
        </span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-briefcase-alt aboutIcon"></i>
        <h3 className="aboutTitle">Realizados</h3>
        <span className="aboutSubtitle">
          10+ projetos desenvolvidos
        </span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-support aboutIcon"></i>
        <h3 className="aboutTitle">Suporte</h3>
        <span className="aboutSubtitle">Sempre a disposição para qualquer problema</span>
      </div>
    </div>
  );
};

export default Info;

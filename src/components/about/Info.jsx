import React from "react";

const Info = () => {
  return (
    <div className="aboutInfo grid">
      <div className="aboutBox">
        <i className="bx bx-award aboutIcon"></i>
        <h3 className="aboutTitle">Experiência</h3>
        <span className="aboutSubtitle">
          3 anos de estudo <br></br> + 2 anos de estágio
        </span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-briefcase-alt aboutIcon"></i>
        <h3 className="aboutTitle">Realizados</h3>
        <span className="aboutSubtitle">
          2 projetos reais <br></br> 10 projetos fícticios
        </span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-support aboutIcon"></i>
        <h3 className="aboutTitle">Suporte</h3>
        <span className="aboutSubtitle">24/7</span>
      </div>
    </div>
  );
};

export default Info;

import React from "react";

const Frontend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Desenvolvedor Frontend</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skillsName">HTML</h3>
              <span className="skillsLevel">Básico</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skillsName">CSS</h3>
              <span className="skillsLevel">Intermediário</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skillsName">JavaScript</h3>
              <span className="skillsLevel">Intermediário</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
        <div className="skillsData">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skillsName">Bootstrap</h3>
            <span className="skillsLevel">Intermediário</span>
          </div>
        </div>

        <div className="skillsData">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skillsName">Git</h3>
            <span className="skillsLevel">Intermediário</span>
          </div>
        </div>

        <div className="skillsData">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skillsName">React</h3>
            <span className="skillsLevel">Intermediário</span>
          </div>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Frontend;

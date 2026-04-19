const Frontend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Frontend Engineering</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">React</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">JavaScript ES6+</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">TypeScript</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">HTML5/CSS3
                /SASS</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

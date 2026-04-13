const Backend = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Backend Development</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Python</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Django</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Django REST</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Node.js</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;

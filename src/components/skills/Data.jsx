const Data = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">Data Management</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">PostgreSQL</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Redis</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">ElastiCache</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Tableau</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;

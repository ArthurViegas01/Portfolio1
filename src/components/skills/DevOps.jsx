const DevOps = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">DevOps & CI/CD</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Docker</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Docker Compose</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">GitHub Actions</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">CodePipeline</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;

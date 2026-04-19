const AI = () => {
  return (
    <div className="skillsContent">
      <h3 className="skillsTitle">AI / ML Engineering</h3>

      <div className="skillsBox">
        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">LangChain</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Sentence Transformers</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skillsGroup">
          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Groq API / LLMs</h3>
              <span className="skillsLevel">Advanced</span>
            </div>
          </div>

          <div className="skillsData">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skillsName">Ollama</h3>
              <span className="skillsLevel">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;

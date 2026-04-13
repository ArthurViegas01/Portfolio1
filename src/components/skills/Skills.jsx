import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Cloud from "./Cloud";
import DevOps from "./DevOps";
import Data from "./Data";
import Excellence from "./Excellence";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">Skills</h2>
      <span className="sectionSubtitle">Technical expertise</span>

      <div className="skillsContainer container grid">
        <Backend />
        <Frontend />
        <Cloud />
        <DevOps />
        <Data />
        <Excellence />
      </div>
    </section>
  );
};

export default Skills;

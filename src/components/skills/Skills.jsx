import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Cloud from "./Cloud";
import DevOps from "./DevOps";
import Data from "./Data";
import Excellence from "./Excellence";
import AI from "./AI";
import { useLanguage } from "../../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="skills section" id="skills">
      <h2 className="sectionTitle">{t.skills.title}</h2>
      <span className="sectionSubtitle">{t.skills.subtitle}</span>

      <div className="skillsContainer container grid">
        <AI />
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

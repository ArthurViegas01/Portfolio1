import "./work.css";
import { useLanguage } from "../../context/LanguageContext";

const WorksItems = ({ item }) => {
  const { t, lang } = useLanguage();

  const description = lang === "en" ? item.description_en : item.description_pt;

  const openProject = () => {
    window.open(item.link, "_blank", "noreferrer");
  };

  return (
    <div className="workCard" onClick={openProject} style={{ cursor: "pointer" }}>
      <div className="workCard-imgWrapper">
        <img src={item.image} alt={item.title} className="workImage" />
        <div className="workCard-overlay">
          <span className="workCard-overlayText">
            <i className="uil uil-external-link-alt"></i> {t.work.viewProject}
          </span>
        </div>
      </div>

      <div className="workCard-body">
        <h3 className="workTitle">{item.title}</h3>

        <p className="workDescription">{description}</p>

        <div className="workTags">
          {item.technologies && item.technologies.map((tech) => (
            <span key={tech} className="workTag">{tech}</span>
          ))}
        </div>

        <div className="workCard-actions">
          <button
            className="workButton"
            onClick={(e) => {
              e.stopPropagation();
              openProject();
            }}
          >
            {t.work.viewProject}
            <i className="uil uil-external-link-alt workButton-icon"></i>
          </button>

          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="workButton workButton--outline"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="bx bxl-github"></i> {t.work.github}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksItems;

import { useState, useEffect } from "react";
import "./work.css";
import { useLanguage } from "../../context/LanguageContext";

/** Detecta o tema atual observando a classe do <body> */
function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.body.classList.contains("dark-theme")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-theme"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

const WorksItems = ({ item }) => {
  const { t, lang } = useLanguage();
  const isDark = useDarkMode();

  // Usa a variante dark/light se disponível; caso contrário cai no `image` padrão
  const thumbnail = isDark
    ? (item.image)
    : (item.imageLight ?? item.image);

  const description = lang === "en" ? item.description_en : item.description_pt;

  const openProject = () => {
    window.open(item.link, "_blank", "noreferrer");
  };

  return (
    <div className="workCard" onClick={openProject} style={{ cursor: "pointer" }}>
      <div className="workCard-imgWrapper">
        <img src={thumbnail} alt={item.title} className="workImage" />
        {item.screenshot && (
          <img
            src={item.screenshot}
            alt={`${item.title} screenshot`}
            className="workImage workImage--screenshot"
            aria-hidden="true"
          />
        )}
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

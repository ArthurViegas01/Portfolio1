import { useState, useEffect } from "react";
import "./work.css";
import { useLanguage } from "../../context/LanguageContext";

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

const MAX_VISIBLE_TAGS = 3;

const WorksItems = ({ item, onOpenModal }) => {
  const { t, lang } = useLanguage();
  const isDark = useDarkMode();

  const thumbnail = isDark ? item.image : (item.imageLight ?? item.image);
  const description = lang === "en" ? item.description_en : item.description_pt;

  const visibleTags = item.technologies?.slice(0, MAX_VISIBLE_TAGS) ?? [];
  const extraCount = (item.technologies?.length ?? 0) - MAX_VISIBLE_TAGS;

  return (
    <div className="workCard" onClick={() => onOpenModal(item)}>
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
            <i className="uil uil-expand-arrows-alt"></i>
            {t.work.viewDetails}
          </span>
        </div>
      </div>

      <div className="workCard-body">
        <h3 className="workTitle">{item.title}</h3>
        <p className="workDescription">{description}</p>
        <div className="workTags">
          {visibleTags.map((tech) => (
            <span key={tech} className="workTag">{tech}</span>
          ))}
          {extraCount > 0 && (
            <span className="workTag workTag--more">+{extraCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorksItems;

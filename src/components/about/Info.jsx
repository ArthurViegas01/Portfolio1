import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const Info = () => {
  const { t } = useLanguage();

  return (
    <div className="aboutInfo grid">
      <div className="aboutBox">
        <i className="bx bx-award aboutIcon"></i>
        <h3 className="aboutTitle">{t.about.experience}</h3>
        <span className="aboutSubtitle">{t.about.experienceYears}</span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-briefcase-alt aboutIcon"></i>
        <h3 className="aboutTitle">{t.about.projects}</h3>
        <span className="aboutSubtitle">{t.about.projectsCount}</span>
      </div>

      <div className="aboutBox">
        <i className="bx bx-globe aboutIcon"></i>
        <h3 className="aboutTitle">{t.about.support}</h3>
        <span className="aboutSubtitle">{t.about.supportText}</span>
      </div>
    </div>
  );
};

export default Info;

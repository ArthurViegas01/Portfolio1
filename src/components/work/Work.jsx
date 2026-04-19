import React from "react";
import "./work.css";
import Works from "./Works";
import { useLanguage } from "../../context/LanguageContext";

const Work = () => {
  const { t } = useLanguage();

  return (
    <section className="work section" id="portfolio">
      <h2 className="sectionTitle">{t.work.title}</h2>
      <span className="sectionSubtitle">{t.work.subtitle}</span>
      <Works />
    </section>
  );
};

export default Work;

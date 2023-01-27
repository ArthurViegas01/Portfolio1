import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="sectionTitle">Portfolio</h2>
      <span className="sectionSubtitle">Trabalhos recentes</span>

      <Works />
    </section>
  );
};

export default Work;

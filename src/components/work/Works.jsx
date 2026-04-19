import React, { useState, useEffect } from "react";
import "./work.css";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { useLanguage } from "../../context/LanguageContext";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (key, index) => {
    setItem({ name: key });
    setActive(index);
  };

  return (
    <div>
      <div className="workFilters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={() => handleClick(navItem.name, index)}
            className={`${active === index ? "activeWork " : ""}workItem`}
          >
            {t.work.categories[navItem.name] || navItem.name}
          </span>
        ))}
      </div>

      <div className="workContainer container grid">
        {projects.map((proj) => (
          <WorksItems item={proj} key={proj.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;

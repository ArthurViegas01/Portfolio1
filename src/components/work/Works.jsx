import React, { useState, useEffect } from "react";
import "./work.css";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { useLanguage } from "../../context/LanguageContext";

const ITEMS_PER_PAGE = 6;

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useLanguage();

  const filtered = activeCategory === "all"
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handleCategoryClick = (name, index) => {
    setActiveCategory(name);
    setActiveIndex(index);
  };

  return (
    <div>
      {/* ── Category filters ── */}
      <div className="workFilters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={() => handleCategoryClick(navItem.name, index)}
            className={`${activeIndex === index ? "activeWork " : ""}workItem`}
          >
            {t.work.categories[navItem.name] || navItem.name}
          </span>
        ))}
      </div>

      {/* ── Project grid ── */}
      <div className="workContainer container grid">
        {paginated.map((proj) => (
          <WorksItems item={proj} key={proj.id} />
        ))}
      </div>

      {/* ── Pagination (only when needed) ── */}
      {totalPages > 1 && (
        <div className="workPagination">
          <button
            className="workPagination-btn"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label={t.work.prev}
          >
            <i className="uil uil-angle-left"></i>
          </button>

          <div className="workPagination-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`workPagination-dot${currentPage === i + 1 ? " workPagination-dot--active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="workPagination-btn"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label={t.work.next}
          >
            <i className="uil uil-angle-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Works;

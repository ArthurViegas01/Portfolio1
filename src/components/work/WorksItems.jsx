import { useState } from "react";
import "./work.css";

const WorksItems = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="workCard" onClick={() => setModalOpen(true)}>
        <div className="workCard-imgWrapper">
          <img src={item.image} alt={item.title} className="workImage" />
          <div className="workCard-overlay">
            <span className="workCard-overlayText">Ver detalhes</span>
          </div>
        </div>

        <div className="workCard-body">
          <h3 className="workTitle">{item.title}</h3>

          <div className="workTags">
            {item.technologies?.slice(0, 3).map((tech) => (
              <span key={tech} className="workTag">
                {tech}
              </span>
            ))}
          </div>

          <button className="workButton">
            Ver mais
            <i className="uil uil-arrow-right workButton-icon"></i>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="workModal activeWorkModal"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="workModal-content">
            <button
              className="workModal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Fechar"
            >
              <i className="uil uil-times"></i>
            </button>

            <h3 className="workModal-title">{item.title}</h3>

            <img
              src={item.image}
              alt={item.title}
              className="workModal-img"
            />

            <p className="workModal-description">{item.description}</p>

            <div className="workModal-tags">
              {item.technologies?.map((tech) => (
                <span key={tech} className="workTag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="workModal-actions">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="button button--flex workModal-btn"
              >
                <i className="uil uil-external-link-alt"></i> Ver projeto
              </a>

              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--flex workModal-btn workModal-btn--outline"
                >
                  <i className="bx bxl-github"></i> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorksItems;

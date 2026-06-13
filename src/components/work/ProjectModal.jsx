import { useState, useEffect } from "react";
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

const ProjectModal = ({ project, onClose }) => {
  const { t, lang } = useLanguage();
  const isDark = useDarkMode();
  const [isClosing, setIsClosing] = useState(false);

  const thumbnail = isDark ? project.image : (project.imageLight ?? project.image);
  const heroImage = project.screenshot ?? thumbnail;
  const description = lang === "en" ? project.description_en : project.description_pt;

  const hasGithub = !!project.github && project.github !== project.link;
  const isGithubLink = project.link?.includes("github.com");

  const close = () => setIsClosing(true);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setIsClosing(true); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`workModalOverlay${isClosing ? " workModalOverlay--out" : ""}`}
      onClick={close}
    >
      <div
        className={`workModal-content${isClosing ? " workModal-content--out" : ""}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={(e) => {
          if (e.target === e.currentTarget && isClosing) onClose();
        }}
        role="dialog"
        aria-modal="true"
      >
        <button className="workModal-close" onClick={close} aria-label="Close">
          <i className="uil uil-times"></i>
        </button>

        <div className="workModal-grid">
          <div className="workModal-media">
            <div className="workModal-imgContainer">
              <img
                src={heroImage}
                alt={`${project.title} preview`}
                className="workModal-heroImg"
              />
            </div>
            {project.screenshot && (
              <div className="workModal-logoRow">
                <img src={thumbnail} alt={project.title} className="workModal-thumb" />
                <span className="workModal-logoLabel">{project.title}</span>
              </div>
            )}
          </div>

          <div className="workModal-info">
            <h3 className="workModal-title">{project.title}</h3>
            <p className="workModal-description">{description}</p>

            <p className="workModal-techLabel">Tech Stack</p>
            <div className="workModal-tags">
              {project.technologies?.map((tech) => (
                <span key={tech} className="workTag">{tech}</span>
              ))}
            </div>

            <div className="workModal-actions">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="workModal-btn workModal-btn--primary"
                >
                  {isGithubLink
                    ? <i className="bx bxl-github"></i>
                    : <i className="uil uil-external-link-alt"></i>
                  }
                  {t.work.viewProject}
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="workModal-btn workModal-btn--outline"
                >
                  <i className="bx bxl-github"></i>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

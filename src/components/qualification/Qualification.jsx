import React, { useState } from "react";
import "./qualification.css";
import { useLanguage } from "../../context/LanguageContext";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const { t, lang } = useLanguage();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const education = {
    pt: [
      {
        title: "Técnico em TI",
        subtitle: "Instituto Adventista de São Paulo",
        year: "2016",
      },
      {
        title: "Ensino Médio",
        subtitle: "Cesi - Viamópolis",
        year: "2017 – 2019",
      },
      {
        title: "Engenharia de Software",
        subtitle: "PUCRS — Pontifícia Universidade Católica do Rio Grande do Sul",
        year: "2021 – 2025",
      },
    ],
    en: [
      {
        title: "Technical Degree in IT",
        subtitle: "Instituto Adventista de São Paulo",
        year: "2016",
      },
      {
        title: "High School",
        subtitle: "Cesi - Viamópolis",
        year: "2017 – 2019",
      },
      {
        title: "B.Sc. Software Engineering",
        subtitle: "PUCRS — Pontifical Catholic University of Rio Grande do Sul",
        year: "2021 – 2025",
      },
    ],
  };

  const experience = {
    pt: [
      {
        title: "Analista de Dados — Estágio",
        subtitle: "Dell / PUCRS",
        desc: "Analisei dados educacionais e construí dashboards em Tableau para apoiar decisões pedagógicas. Automatizei relatórios e pipelines de dados em parceria com a PUCRS.",
        year: "2021 – 2022",
      },
      {
        title: "Desenvolvedor Fullstack — Estágio",
        subtitle: "Dataglass",
        desc: "Desenvolvi features em Django REST e React, integrei APIs de terceiros, containerizei serviços com Docker e realizei deploys na AWS (EC2, Elastic Beanstalk). Atuei em sprints Scrum com código revisado em pull requests.",
        year: "2023 – 2024",
      },
    ],
    en: [
      {
        title: "Data Analyst Intern",
        subtitle: "Dell / PUCRS",
        desc: "Analyzed educational data and built Tableau dashboards to support pedagogical decisions. Automated reporting pipelines in a joint program between Dell and PUCRS.",
        year: "2021 – 2022",
      },
      {
        title: "Fullstack Developer Intern",
        subtitle: "Dataglass",
        desc: "Shipped features across Django REST and React, integrated third-party APIs, containerized services with Docker, and deployed on AWS (EC2, Elastic Beanstalk). Worked in Scrum sprints with code reviewed through pull requests.",
        year: "2023 – 2024",
      },
    ],
  };

  const edu = education[lang];
  const exp = experience[lang];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="sectionTitle">{t.qualification.title}</h2>
      <span className="sectionSubtitle">{t.qualification.subtitle}</span>

      <div className="qualificationContainer container">
        <div className="qualificationTabs">
          <div
            className={
              toggleState === 1
                ? "qualificationButton qualificationActive button--flex"
                : "qualificationButton button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualificationIcon"></i>
            {t.qualification.education}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualificationButton qualificationActive button--flex"
                : "qualificationButton button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualificationIcon"></i>
            {t.qualification.experience}
          </div>
        </div>

        <div className="qualificationSections">
          {/* ===== EDUCATION ===== */}
          <div
            className={
              toggleState === 1
                ? "qualificationContent qualificationContent-active"
                : "qualificationContent"
            }
          >
            {edu.map((item, idx) => (
              <div className="qualificationData" key={idx}>
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualificationTitle">{item.title}</h3>
                      <span className="qualificationSubtitle">{item.subtitle}</span>
                      <div className="qualificationCalendar">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                    <div>
                      <span className="qualificationRounder"></span>
                      {idx < edu.length - 1 && <span className="qualificationLine"></span>}
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualificationRounder"></span>
                      {idx < edu.length - 1 && <span className="qualificationLine"></span>}
                    </div>
                    <div>
                      <h3 className="qualificationTitle">{item.title}</h3>
                      <span className="qualificationSubtitle">{item.subtitle}</span>
                      <div className="qualificationCalendar">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* ===== EXPERIENCE ===== */}
          <div
            className={
              toggleState === 2
                ? "qualificationContent qualificationContent-active"
                : "qualificationContent"
            }
          >
            {exp.map((item, idx) => (
              <div className="qualificationData" key={idx}>
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="qualificationTitle">{item.title}</h3>
                      <span className="qualificationSubtitle">{item.subtitle}</span>
                      <span className="qualificationDesc">{item.desc}</span>
                      <div className="qualificationCalendar">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                    <div>
                      <span className="qualificationRounder"></span>
                      {idx < exp.length - 1 && <span className="qualificationLine"></span>}
                    </div>
                    <div></div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="qualificationRounder"></span>
                      {idx < exp.length - 1 && <span className="qualificationLine"></span>}
                    </div>
                    <div>
                      <h3 className="qualificationTitle">{item.title}</h3>
                      <span className="qualificationSubtitle">{item.subtitle}</span>
                      <span className="qualificationDesc">{item.desc}</span>
                      <div className="qualificationCalendar">
                        <i className="uil uil-calendar-alt"></i> {item.year}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="sectionTitle">Qualificação</h2>
      <span className="sectionSubtitle">Minha jornada pessoal</span>

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
            <i className="uil uil-graduation-cap qualificationIcon"></i>Educação
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
            Experiência
          </div>
        </div>

        <div className="qualificationSections">
          <div
            className={
              toggleState === 1
                ? "qualificationContent qualificationContent-active"
                : "qualificationContent"
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">Técnico em TI</h3>
                <span className="qualificationSubtitle">
                  Instituto Adventista de São Paulo
                </span>
                <div className="qualificationCalendar">
                  <i className="uil uil-calendar-alt"></i>2016/01 - 2016/12
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">Ensino Médio</h3>
                <span className="qualificationSubtitle">Cesi - Viamópolis</span>
                <div className="qualificationCalendar">
                  <i className="uil uil-calendar-alt"></i>2017 - 2018
                </div>
              </div>
            </div>

            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">Engenharia de Software</h3>
                <span className="qualificationSubtitle">
                  Pontifícia Universidade Católica do Rio Grande do Sul
                </span>
                <div className="qualificationCalendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Atualidade
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualificationContent qualificationContent-active"
                : "qualificationContent"
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">
                  Analista de dados - Estágio
                </h3>
                <span className="qualificationSubtitle">Dell-PUCRS</span>
                <div className="qualificationCalendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Atualidade
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">Desenvolvimento Web</h3>
                <span className="qualificationSubtitle">
                  Pontifícia Universidade Católica do Rio Grande do Sul
                </span>
                <div className="qualificationCalendar">
                  <i className="uil uil-calendar-alt"></i>2021 - Atualidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

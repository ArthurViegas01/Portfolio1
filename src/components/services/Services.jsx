import React, { useState } from "react";
import "./services.css";
import { useLanguage } from "../../context/LanguageContext";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const { t } = useLanguage();

  const items = t.services.items;

  return (
    <section className="services section" id="services">
      <h2 className="sectionTitle">{t.services.title}</h2>
      <span className="sectionSubtitle">{t.services.subtitle}</span>

      <div className="servicesContainer container grid">
        {items.map((service, idx) => (
          <div className="servicesContent" key={idx}>
            <div>
              <i className={`${service.icon} servicesIcon`}></i>
              <h3 className="servicesTitle">{service.title}</h3>
            </div>

            <span className="servicesButton" onClick={() => setToggleState(idx + 1)}>
              {t.services.seeMore}
              <i className="uil uil-arrow-right servicesButton-icon"></i>
            </span>

            <div
              className={
                toggleState === idx + 1 ? "servicesModal activeModal" : "servicesModal"
              }
            >
              <div className="servicesModal-content">
                <i
                  onClick={() => setToggleState(0)}
                  className="uil uil-times servicesModal-close"
                ></i>
                <h3 className="servicesModal-title">{service.title}</h3>

                <p className="servicesModal-descricao">{service.description}</p>

                <ul className="servicesModal-services grid">
                  {service.bullets.map((bullet, bIdx) => (
                    <li className="servicesModal-service" key={bIdx}>
                      <i className="uil uil-check-circle servicesModal-icon"></i>
                      <p className="servicesModal-info">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

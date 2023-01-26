import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="sectionTitle">Services</h2>
      <span className="sectionSubtitle">
        O que eu ofereço como profissional:
      </span>

      <div className="servicesContainer container grid">
        <div className="servicesContent">
          <div>
            <i className="uil uil-web-grid servicesIcon"></i>
            <h3 className="servicesTitle">
              Product <br /> Designer
            </h3>
          </div>

          <span className="servicesButton" onClick={() => toggleTab(1)}>
            Veja mais
            <i className="uil uil-arrow-right servicesButton-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times servicesModal-close"
              ></i>
              <h3 className="servicesModal-title">Product Designer</h3>

              <p className="servicesModal-descricao">
                Trabalho para garantir que os produtos atendam às necessidades
                dos usuários e sejam esteticamente atraentes
              </p>

              <ul className="servicesModal-services grid">
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Crio protótipos e modelos para testar conceitos de design
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Trabalho para garantir que o projeto seja viável e atenda às
                    necessidades do mercado
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Utilizo ferramentas de design, como Figma, Photoshop e
                    Blender, para criar designs e layouts
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Testo e avalio os protótipos
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="servicesContent">
          <div>
            <i className="uil uil-arrow servicesIcon"></i>
            <h3 className="servicesTitle">
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="servicesButton">
            Veja mais
            <i className="uil uil-arrow-right servicesButton-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times servicesModal-close"
              ></i>

              <h3 className="servicesModal-title">Ui/Ux Designer</h3>

              <p className="servicesModal-descricao">
                Trabalho para garantir que a interação do usuário com o produto
                seja intuitiva, fácil de usar e esteticamente atraente
              </p>

              <ul className="servicesModal-services grid">
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Crio protótipos e especificações de design para testar
                    conceitos de interação e layout
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Investigo as necessidades dos usuários e os desafios
                    técnicos relacionados ao projeto
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Utilizo personas para entender melhor como o usuário
                    utilizará o produto
                  </p>
                </li>

                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Encontro maneiras criativas de resolver problemas de
                    experiência do usuário
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="servicesContent">
          <div>
            <i className="uil uil-edit servicesIcon"></i>
            <h3 className="servicesTitle">
              Visual <br /> Designer
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="servicesButton">
            Veja mais
            <i className="uil uil-arrow-right servicesButton-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "servicesModal activeModal" : "servicesModal"
            }
          >
            <div className="servicesModal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times servicesModal-close"
              ></i>

              <h3 className="servicesModal-title">Visual Designer</h3>

              <p className="servicesModal-descricao">
                Ainda não possuo experiência profissional como designer visual,
                mas estou estudando e me desenvolvendo constantemente para
                aprimorar minhas habilidades
              </p>

              <ul className="servicesModal-services grid">
                <li className="servicesModal-service">
                  <i className="uil uil-check-circle servicesModal-icon"></i>
                  <p className="servicesModal-info">
                    Estou ansioso para aplicar meus conhecimentos e habilidades
                    em projetos futuros
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

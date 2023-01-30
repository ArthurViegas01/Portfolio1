import React, { useState } from "react";
import "./work.css";

const WorksItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="workCard" key={item.id}>
      <img src={item.image} alt="" className="workImage" />
      <h3 className="workTitle">{item.title}</h3>
      <span onClick={() => toggleTab(1)} className="workButton">
        Veja mais
        <i className="uil uil-arrow-right workButton-icon"></i>
      </span>

      <div
        className={
          toggleState === 1 ? "workModal activeWorkModal" : "workModal"
        }
      >
        <div className="workModal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times workModal-close"
          ></i>
          <h3 className="workModal-title">Donut 3D - Modelado no Blender</h3>

          <div className="workModal-video">
            <iframe
              width="452"
              height="560"
              className="workIframeVideo"
              src={item.link}
              title={item.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksItems;

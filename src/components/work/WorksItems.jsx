import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="workCard" key={item.id}>
      <img src={item.image} alt="" className="workImage" />
      <h3 className="workTitle">{item.title}</h3>
      <a href="/#" className="workButton">
        Demo <i className="bx bx-right-arrow-alt workButton-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;

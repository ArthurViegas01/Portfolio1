import "./work.css";

const WorksItems = ({ item }) => {


  return (
    <div className="workCard" key={item.id}>
      <img src={item.image} alt="" className="workImage"/>
      <h3 className="workTitle">{item.title}</h3>
      <a href={item.link} className="workButton">
        Veja mais
        <i className="uil uil-arrow-right workButton-icon"></i>
      </a>

      
    </div>
  );
};

export default WorksItems;

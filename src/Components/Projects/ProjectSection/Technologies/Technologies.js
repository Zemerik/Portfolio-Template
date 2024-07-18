import "./Technologies.scss";

const Technologies = (props) => {
  return (
    <div>
      <div className="technologies-list">
        {props.techs.map((technology, index) => (
          <div key={index} className="technology-item">
            {technology}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

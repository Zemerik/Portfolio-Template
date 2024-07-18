import "./ProjectSection.scss";
import Technologies from "./Technologies/Technologies";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const ProjectSection = (props) => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="container">
      <div className="content-left" data-aos="fade-right">
        <h2>{props.title}</h2>
        <Technologies
          className="techs"
          techs={props.techs}
          data-aos="fade-right"
        />
        <span className="details">{props.desc}</span>
        <div className="project-buttons">
          <Link to={props.liveUrl} target="_blank">
            <button className="button button--hyperion">
              <span>
                <span>See Live</span>
              </span>
            </button>
          </Link>
          <Link to={props.sourceCodeUrl} target="_blank">
            <button className="button button--hyperion">
              <span>
                <span>Source Code</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="image-section" data-aos="fade-down">
        <img className="project-image" src={props.imageUrl} alt="project" />
      </div>
    </div>
  );
};

export default ProjectSection;

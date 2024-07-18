import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.scss";

import Lottie from "lottie-react";
import rocket from "./5306-rocket-funk.json";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="about" id="about">
      <h1 data-aos="zoom-in">About</h1>
      <div className="about-container">
        <Lottie className="lottie-animation" animationData={rocket} />
        <p className="about-description" data-aos="fade-down">
        As a 15-year-old high school student, I am driven by an unwavering passion for pursuing a career as a front-end software developer. 
        With a knack for transforming concepts into tangible realities, 
        I possess a strong command of Frontend, Backend, and API's, enabling me to bring ideas to life through coding expertise.
        </p>
      </div>
    </div>
  );
};

export default About;

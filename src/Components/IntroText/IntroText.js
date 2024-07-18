import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./IntroText.scss";

const IntroText = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div className="intro-text">
      <div className="fade-in-left" data-aos="fade-right">
        <h1 className="first-line">
          Hi, Im <span className="aqua-text">Hemang</span>
        </h1>
        <h1 className="second-line">A Passionate Developer</h1>
      </div>
    </div>
  );
};

export default IntroText;

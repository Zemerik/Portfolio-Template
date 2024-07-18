import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CodingImage from "./front-image.png";
import "./FrontImage.scss";

const FrontImage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="front-image">
      <div className="lottie-container">
        <img
          src={CodingImage}
          alt="coding"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
    </div>
  );
};

export default FrontImage;

import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import "./VerticalList.scss";

const VerticalList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const lineAnimation = useSpring({
    from: { scaleY: 0 },
    to: { scaleY: 1 },
    config: { duration: 500 },
  });

  return (
    <div className="list-vals">
      <animated.div
        data-aos="fade-right"
        data-aos-offset="2"
        style={lineAnimation}
        className="vertical-line"
      />
      <animated.ul>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="100"
          className="Skills"
        >
          <Link
            className="link-class"
            to="skills-section"
            smooth={true}
            duration={600}
            data-replace="Skills"
          >
            <span>Skills</span>
          </Link>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="300"
          className="Projects"
        >
          <Link
            className="link-class"
            to="projects"
            smooth={true}
            duration={600}
            data-replace="Projects"
          >
            <span>Projects</span>
          </Link>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="500"
          className="About"
        >
          <Link
            className="link-class"
            to="about"
            smooth={true}
            duration={600}
            data-replace="About"
          >
            <span>About</span>
          </Link>
        </li>
        <li
          data-aos="fade-up"
          data-aos-offset="2"
          data-aos-delay="700"
          className="Contact"
        >
          <Link
            className="link-class"
            to="contact"
            smooth={true}
            duration={600}
            data-replace="Contact"
          >
            <span>Contact</span>
          </Link>
        </li>
      </animated.ul>
    </div>
  );
};

export default VerticalList;

import React, { useEffect } from "react";
import "./SkillsSection.scss";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiBootstrap,
  SiRedux,
  SiCsharp,
  SiMongodb,
  SiExpress,
  SiTypescript,
} from "react-icons/si";

import { FaJava, FaNodeJs } from "react-icons/fa";

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="skills-section" id="skills-section">
      <div className="skills-content">
        <h1 className="skills-heading" data-aos="zoom">
          Skills
        </h1>
        <div className="skills-icons">
          {/* HTML */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiHtml5 className="skill-icon" title="HTML" />
            HTML
          </div>
          {/* CSS */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiCss3 className="skill-icon" title="CSS" />
            CSS
          </div>
          {/* JavaScript */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiJavascript className="skill-icon" title="JavaScript" />
            JavaScript
          </div>
          {/* TypeScript */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiTypescript className="skill-icon" title="TypeScript" />
            TypeScript
          </div>
          {/* Java */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FaJava className="skill-icon" title="Java" />
            Java
          </div>
          {/* C# */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiCsharp className="skill-icon" title="C#" />
            C#
          </div>

          {/* React */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiReact className="skill-icon" title="React" />
            React
          </div>
          {/* Redux */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiRedux className="skill-icon" title="Redux" />
            Redux
          </div>
          {/* Tailwind CSS */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiTailwindcss className="skill-icon" title="Tailwind CSS" />
            Tailwind CSS
          </div>
          {/* Bootstrap */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiBootstrap className="skill-icon" title="Bootstrap" />
            Bootstrap
          </div>
          {/* Git */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiGit className="skill-icon" title="Git" />
            Git
          </div>
          {/* Node.js */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <FaNodeJs className="skill-icon" title="Node.js" />
            Node.js
          </div>

          {/* Express.js */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiExpress className="skill-icon" title="Express.js" />
            Express.js
          </div>

          {/* MongoDB */}
          <div
            className="skills-container"
            data-aos="fade-right"
            data-aos-offset="100"
          >
            <SiMongodb className="skill-icon" title="MongoDB" />
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

import React, { useEffect } from "react";
import "./Projects.scss";

import zemposts from "./ProjectSection/ProjectImages/zemposts.png";
import zemshowcase from "./ProjectSection/ProjectImages/zemshowcase.png";
import zemprofiles from "./ProjectSection/ProjectImages/zemprofiles.png";

import "aos/dist/aos.css";
import AOS from "aos";

import ProjectSection from "./ProjectSection/ProjectSection";

//info for the project
const projectDetails = [
  {
    title: "ZemPosts",
    technologiesUsed: [
      "React.js",
      "HTML",
      "Astro",
      "Node.js",
      "MongoDB",
      "Vercel",
    ],
    description:
      "ZemPosts stands as an open-source platform, providing users with the opportunity to write and read blogs seamlessly. This connectivity is fostered through the simple act of publishing one's blog to the platform, thus creating a digital hub where like-minded individuals can engage, collaborate, and share insights within the expansive realm of writing and blogging. With its user-friendly interface and inclusive community ethos, ZemPosts serves as a dynamic space where connections are forged, ideas are exchanged, and creativity thrives.",
    imageUrl: zemposts,
    liveLink: "https://zemposts.vercel.app",
    sourceCodeLink: "https://github.com/Zemerik/ZemPosts",
  },
  {
    title: "ZemShowcase",
    technologiesUsed: [
      "React.js",
      "CSS",
      "Javascript",
      "HTML",
      "Vercel"
    ],
    description:
      "ZemShowcase stands as an open-source platform, providing users with the opportunity to exhibit their projects seamlessly to fellow developers. This exhibition is fostered through the simple act of adding one's Project to the platform, thus creating a digital hub where like-minded individuals can engage, collaborate, and share insights within the expansive realm of software development. With its user-friendly interface and inclusive community ethos, ZemShowcase serves as a dynamic space where projects are highlighted, ideas are exchanged, and innovation thrives.",
    imageUrl: zemshowcase,
    liveLink: "https://zemshowcase.vercel.app",
    sourceCodeLink: "https://github.com/Zemerik/ZemShowcase",
  },

  {
    title: "ZemProfiles",
    technologiesUsed: [
      "React.js", 
      "Javascript", 
      "Typescript", 
      "CSS",
      "HTML",
      "Vercel"
    ],
    description:
      "ZemProfiles stands as an open-source platform, providing users with the opportunity to connect seamlessly with fellow developers. This connectivity is fostered through the simple act of adding one's Profile to the platform, thus creating a digital hub where like-minded individuals can engage, collaborate, and share insights within the expansive realm of software development. With its user-friendly interface and inclusive community ethos, ZemProfiles serves as a dynamic space where connections are forged, ideas are exchanged, and innovation thrives.",
    imageUrl: zemprofiles,
    liveLink: "https://zemprofiles.vercel.app",
    sourceCodeLink: "https://github.com/Zemerik/ZemProfiles",
    //add links to where the buttons add here later for source code and live demo
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="projects" id="projects">
      <h1 className="projects-start-title" data-aos="zoom">
        Projects
      </h1>
      <div className="section-spacing">
        {projectDetails.map((project) => (
          <ProjectSection
            title={project.title}
            techs={project.technologiesUsed}
            desc={project.description}
            imageUrl={project.imageUrl}
            liveUrl={project.liveLink}
            sourceCodeUrl={project.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faInstagram,
  faLinkedin,
  faGithub,
  // faFilePdf,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-react";
import deca from "./deca.json";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar" id="start">
      <div className="navbar-start">
        <Lottie className="lottie-anim" animationData={deca} />
      </div>
      <div className="navbar-end">
        <ul className="nav-links">
          <li>
            <a
              href="https://www.linkedin.com/in/zemerik/"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Zemerik"
              className="font-class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

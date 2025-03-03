import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="top">
      <div className="container header">
        {/* <h3 className="title">Hello👋</h3> */}

        <div className={`nav rectangle ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}  // Adjust this offset if necessary
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}  // Adjust this offset if necessary
                onClick={toggleSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}  // Adjust this offset if necessary
                onClick={toggleSidebar}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="experiance"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}  // Adjust this offset if necessary
                onClick={toggleSidebar}
              >
                Experiance
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-70}  // Adjust this offset if necessary
                onClick={toggleSidebar}
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="closeIcon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>

        <div className="btn">
          <button>
            <Link to="contact" smooth={true} duration={500}>
              Contact me
            </Link>
          </button>
        </div>
        <div className="hamburgerIcon" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


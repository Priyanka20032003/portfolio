// import React from "react";
// import "./Navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope,faBars } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="top">
//       <div className="container header">
//         <h3 className="title"> Hello👋</h3>
//         <div className="nav rectangle">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/skills">Skills</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="btn">
//           <button>
//            <Link to="/contact">
//             <span className="icon">
//               <FontAwesomeIcon icon={faEnvelope} />
//             </span>
//             Hire me
//             </Link>
//           </button>
//         </div>
//         <div className="hamburgerIcon">
//           <FontAwesomeIcon icon={faBars}/>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="top">
      <div className="container header">
        <h3 className="title">Hello👋</h3>

        <div className={`nav rectangle ${sidebarOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" onClick={toggleSidebar}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleSidebar}>
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
            <Link to="/contact">
             
              Hire me
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

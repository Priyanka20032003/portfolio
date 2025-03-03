import React, { useState } from "react";
import "./Experiance.css";
import { Element } from "react-scroll";

const Experiance = () => {
  const [showDetails, setShowDetails] = useState({
    cognizant: false,
    tmachine: false,
  });

  const toggleDetails = (company) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [company]: !prevState[company],
    }));
  };

  return (
    <Element name="experiance">
      <div className="experiance">
        <div className="container1">
          <h2 className="experianceH2">Experience</h2>

          <div className="experiance2">
            <h4 className="company">Cognizant Technology Solutions</h4>
            <p className="duration">September 2024 - Present</p>
            <h4 className="role">Programmer Analyst Trainee</h4>

            {/* Description visible by default on larger screens */}
            <p className="description">
              Currently, I am assigned to a project related to CyberArk
              Privileged Access Management (PAM), focusing on securing
              privileged accounts and enforcing least privilege access. This
              project involves implementing security best practices to protect
              sensitive credentials, managing privileged user access, and
              ensuring compliance with industry security standards.
            </p>

            {/* Toggle button only for screens <= 568px */}
            <div className="mobile-toggle">
              {!showDetails.cognizant && (
                <p
                  className="showMore"
                  onClick={() => toggleDetails("cognizant")}
                >
                  Show More Details
                </p>
              )}
              {showDetails.cognizant && (
                <>
                  <p className="description mobile">
                    Currently, I am assigned to a project related to CyberArk
                    Privileged Access Management (PAM), focusing on securing
                    privileged accounts and enforcing least privilege access.
                    This project involves implementing security best practices
                    to protect sensitive credentials, managing privileged user
                    access, and ensuring compliance with industry security
                    standards.
                  </p>
                  <p
                    className="showMore"
                    onClick={() => toggleDetails("cognizant")}
                  >
                    Show Less
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="experiance1">
            <h4 className="company">T-Machine Software Solutions</h4>
            <p className="duration">January 2024 - June 2024</p>
            <h4 className="role">Frontend Developer (Internship)</h4>

            {/* Description visible by default on larger screens */}
            <p className="description">
              During my internship, I worked on a real-time project named Smart
              Agile, where I played a key role in designing and developing the
              user interface using the React framework. This experience allowed
              me to deepen my understanding of modern web technologies,
              including JavaScript, React, and CSS, and apply them in a
              practical, fast-paced environment.
            </p>

            {/* Toggle button only for screens <= 568px */}
            <div className="mobile-toggle">
              {!showDetails.tmachine && (
                <p className="showMore" onClick={() => toggleDetails("tmachine")}>
                  Show More Details
                </p>
              )}
              {showDetails.tmachine && (
                <>
                  <p className="description mobile">
                    During my internship, I worked on a real-time project named
                    Smart Agile, where I played a key role in designing and
                    developing the user interface using the React framework.
                    This experience allowed me to deepen my understanding of
                    modern web technologies, including JavaScript, React, and
                    CSS, and apply them in a practical, fast-paced environment.
                  </p>
                  <p className="showMore" onClick={() => toggleDetails("tmachine")}>
                    Show Less
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experiance;


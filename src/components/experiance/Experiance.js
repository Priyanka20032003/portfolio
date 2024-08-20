import React from "react";
import "./Experiance.css";
import { Element } from "react-scroll";
const Experiance = () => {
  return (
    <Element name="experiance">
      <div className="experiance">
        <div className="container1">
          <h2 className="experianceH2">Experiance</h2>

          {/* <h4 className='year'>2024</h4> */}
          <h4 className="company">T-Machine Software Solutions</h4>
          <p className="description">
            I completed a six-month internship at T-Machine Software Solutions
            as a Frontend Developer from January to June. During this time, I
            had the opportunity to work on a real-time project named Smart
            Agile, where I played a key role in designing and developing the
            user interface using the React framework. This experience allowed me
            to deepen my understanding of modern web technologies, including
            JavaScript, React, and CSS, and apply them in a practical,
            fast-paced environment. I collaborated closely with a
            cross-functional team, gaining insights into agile development
            practices, and delivering high-quality, user-friendly features. My
            time at T-Machine Software Solutions was incredibly valuable, as it
            not only enhanced my technical skills but also strengthened my
            ability to work effectively in a professional software development
            environment.{" "}
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Experiance;

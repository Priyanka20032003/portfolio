import React from "react";
import losangelsimg from "../../images/losangels.jpg";
import healthcare from "../../images/healthcare.png";
import randomQuote1 from "../../images/randomQuote.jpg";
import stopwatch1 from "../../images/stopwatch1.jpg";
import realestate from "../../images/realestate.jpg";

import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects ">
      <div className="container1 ">
        <h2 className="projectH2">My Projects</h2>
        <div className="cards">
          <div className="card">
            <a
              href="https://priyanka20032003.github.io/tour_website/"
              target="_blank"
            >
              <img src={losangelsimg}></img>
            </a>
            <h3>Tour Website</h3>
            <p>
              Tour website is a static page crafted with HTML, CSS, and
              Bootstrap for a clean, responsive design. 
            </p>
            <a
              href="https://github.com/Priyanka20032003/tour_website"
              target="_blank"
            >
              <button>View Code</button>
            </a>
          </div>

          <div className="card">
            <a
              href="https://priyanka20032003.github.io/easy_landing_page/"
              target="_blank"
            >
              <img src={healthcare}></img>
            </a>
            <h3>Easy Landing Page</h3>
            <p>A responsive static webpage created using HTML and CSS.</p>
            <a
              href="https://github.com/Priyanka20032003/easy_landing_page"
              target="_blank"
            >
              <button>View Code</button>
            </a>
          </div>
          <div className="card">
            <a
              href=" https://priyanka20032003.github.io/random_quote/"
              target="_blank"
            >
              <img src={randomQuote1}></img>
            </a>
            <h3>Random Quote Generator</h3>
            <p>
              The Random Quote Generator is a simple web application built with
              HTML, CSS, and JavaScript.
            </p>
            <a
              href="https://github.com/Priyanka20032003/random_quote"
              target="_blank"
            >
              <button>View Code</button>
            </a>
          </div>
          <div className="card">
            <a
              href="https://priyanka20032003.github.io/stopwatch/"
              target="_blank"
            >
              <img src={stopwatch1}></img>
            </a>
            <h3>Stopwatch</h3>
            <p>The Stopwatch is a functional web application developed with HTML, CSS, and JavaScript, featuring start, stop, and reset functionalities. </p>
            <a
              href="https://github.com/Priyanka20032003/stopwatch"
              target="_blank"
            >
              <button>View Code</button>
            </a>
          </div>
          <div className="card">
            <a
              href=" https://priyanka20032003.github.io/realEstate_react/"
              target="_blank"
            >
              <img src={realestate}></img>
            </a>
            <h3>RealEstate Website</h3>
            <p>A responsive RealEstate website designed with React.</p>
            <a
              href="https://github.com/Priyanka20032003/realEstate_react"
              target="_blank"
            >
              <button>View Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

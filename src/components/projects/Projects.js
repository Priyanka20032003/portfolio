import React from "react";
import losangelsimg from "../../images/losangels.jpg";
import healthcare from "../../images/healthcare.png";
import randomQuote1 from "../../images/randomQuote.jpg";
import stopwatch1 from "../../images/stopwatch1.jpg";
import realestate from "../../images/realestate.jpg";
import todo from "../../images/todo.jpg";

import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects ">
      <div className="container1 ">
        <h2 className="projectH2">Projects</h2>
        <div className="cards">
          <div className="card">
            <img src={todo}></img>

            <h3>Todo Hub</h3>
            <p>
              A React-based Todo app that allows users to create, edit, and
              manage tasks.
            </p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/todoHub"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/todoHub/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={randomQuote1}></img>

            <h3>Random Quote Generator</h3>
            <p>
              The Random Quote Generator is a simple web application built with
              HTML, CSS, and JavaScript.
            </p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/random_quote"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/random_quote/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={stopwatch1}></img>

            <h3>Stopwatch</h3>
            <p>
              The Stopwatch is a functional web application developed with HTML,
              CSS, and JavaScript, featuring start, stop, and reset
              functionalities.{" "}
            </p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/stopwatch"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/stopwatch/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={realestate}></img>

            <h3>RealEstate Website</h3>
            <p>A responsive RealEstate website designed with React.</p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/realEstate_react"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/realEstate_react/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={losangelsimg}></img>

            <h3>Tour Website</h3>
            <p>
              Tour website is a static page crafted with HTML, CSS, and
              Bootstrap for a clean, responsive design.
            </p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/tour_website"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/tour_website/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
          <div className="card">
            <img src={healthcare}></img>

            <h3>Easy Landing Page</h3>
            <p>A responsive static webpage created using HTML and CSS.</p>
            <div className="btns">
              <a
                href="https://github.com/Priyanka20032003/easy_landing_page"
                target="_blank"
              >
                <button className="card_btn">Code</button>
              </a>
              <a
                href="https://priyanka20032003.github.io/easy_landing_page/"
                target="_blank"
              >
                <button className="card_btn">Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

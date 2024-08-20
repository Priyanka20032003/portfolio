import React from "react";
import HTML5 from "../../images/HTML5.png";
import CSS3 from "../../images/CSS3.png";
import Tailwind from "../../images/Tailwind CSS.png";
import Bootstrap from "../../images/Bootstrap.png";
import JavaScript from "../../images/JavaScript.png";
import ReactImg from "../../images/ReactImg.png";
import GitHub from "../../images/GitHub.png";
import Python from "../../images/Python.png";
import example1 from '../../images/example1.png';
import "./Skills.css";
import { Element } from "react-scroll";
const Skills = () => {
  return (
    <Element name="skills">
      <div className="skills">
        <div className="container1 skillsLeftRight">
          <div className="skillsLeft">
            <img src={example1}></img>
          </div>
          <div className="skillsRight">
            <h3 className="skillsH3">My Skills</h3>
            <div className="techIcons">
              {/* <img src={HTML5} className="skillIcon"></img>
              <img src={CSS3} className="skillIcon"></img>
              <img src={Tailwind} className="skillIcon"></img>
           
              <img src={Bootstrap} className="skillIcon"></img>
              <img src={JavaScript} className="skillIcon"></img>
              <img src={ReactImg} className="skillIcon"></img>
          
              <img src={GitHub} className="skillIcon"></img>
              <img src={Python} className="skillIcon"></img> */}

              <div className="skillIcon">
                <img src={HTML5}></img>
              </div>
              <div className="skillIcon">
                <img src={CSS3}></img>
              </div>
              <div className="skillIcon">
                <img src={Tailwind}></img>
              </div>
              <div className="skillIcon">
                <img src={Bootstrap}></img>
              </div>
              <div className="skillIcon">
                <img src={JavaScript}></img>
              </div>
              <div className="skillIcon">
                <img src={ReactImg}></img>
              </div>
              <div className="skillIcon">
                <img src={GitHub}></img>
              </div>
              <div className="skillIcon">
                <img src={Python}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;

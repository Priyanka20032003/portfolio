import React from "react";
import profileImage from "../../images/profile.jpeg";
import "./Home.css";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <Element name="home">
      <div className=" home">
        <div className="profile">
          <img src={profileImage}></img>
        </div>
        <div className="homeHeader">
          <h2 className="homeH2">Hi, I'm Priyanka</h2>
          <h1 className="homeH1">Frontend Developer</h1>
          <p className="homep1">
            I turn ideas into visually stunning and highly interactive web
            applications. With a strong grasp of React, JavaScript, and modern
            web technologies, I craft seamless user experiences that balance
            aesthetics and functionality.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Home;

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
          <h2 className="homeH2">I'm Priyanka</h2>
          <h1 className="homeH1">
            Frontend<br></br> Developer
          </h1>
          <p className="homep1">I build things for web</p>
        </div>
      </div>
    </Element>
  );
};

export default Home;

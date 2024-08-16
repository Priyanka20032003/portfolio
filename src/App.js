import React from "react";
import './App.css'
import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Experiance from "./components/experiance/Experiance";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={  <Contact />}></Route>
      </Routes> */}
      <Home />
      <About />
      <Skills /> 
      <Experiance/>
       <Projects /> 
       
      <Contact />
    
      
    </div>
  );
}

export default App;


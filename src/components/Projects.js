import React from "react";
import "./skills.css";
import project1 from "./pic/p1.jfif";
import project2 from "./pic/p2.jfif";
import project3 from "./pic/pr3.jfif";

export default function Projects() {
  return (
    <>
      <div className="Skills" id="Projects">
        <div className="skillbox1">
          <h1>My Projects</h1>
        </div>
        <div className="projectbox">
          <div className="Project">
            <div className="prbox">
              <div className="prbox1">
                <a href="https://coviid-19.netlify.app/">
                  <img src={project1} alt="project" />
                </a>
              </div>
              <div className="prbox2">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vero, architecto dolorum? Ea quod, fugiat maiores aliquam
                  maxime rem quia quaerat.
                </p>
              </div>
            </div>
            <div className="prbox">
              <div className="prbox2">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vero, architecto dolorum? Ea quod, fugiat maiores aliquam
                  maxime rem quia quaerat.
                </p>
              </div>
              <div className="prbox1">
                <a href="https://arunsingh009.github.io/lets-Review4u/">
                  <img src={project2} alt="project" />
                </a>
              </div>
            </div>
            <div className="prbox">
              <div className="prbox1">
                <a href="https://arunsingh009.github.io/To-do-app/">
                  <img src={project3} alt="project" />
                </a>
              </div>
              <div className="prbox2">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Vero, architecto dolorum? Ea quod, fugiat maiores aliquam
                  maxime rem quia quaerat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

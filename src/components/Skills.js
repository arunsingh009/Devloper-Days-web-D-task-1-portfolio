import React from "react";
import "./skills.css";
import Html from "./pic/html.png";
import Css from "./pic/css.png";
import JS from "./pic/js.png";
import Bs from "./pic/bs.png";
import Figma from "./pic/fi.png";
import Canva from "./pic/canva.png";
import Cp from "./pic/cp.png";

export default function Skills() {
  return (
    <>
      <div className="Skills" id="Skills">
        <div className="skillbox1">
          <h1>My Skills</h1>
        </div>
        <div className="skillbox2">
          <div className="Skill">
            <img src={Html} alt="Html" />
          </div>
          <div className="Skill">
            <img src={Css} alt="css" />
          </div>
          <div className="Skill">
            <img src={JS} alt="js" />
          </div>
          <div className="Skill">
            <img src={Bs} alt="Bootstrap" />
          </div>
          <div className="Skill">
            <img src={Figma} alt="Figma" />
          </div>
          <div className="Skill">
            <img src={Canva} alt="Figma" />
          </div>
          <div className="Skill">
            <img src={Cp} alt="C programming" />
          </div>
        </div>
      </div>
    </>
  );
}

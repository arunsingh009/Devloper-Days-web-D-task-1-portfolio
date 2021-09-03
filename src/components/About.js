import React from "react";
import "./about.css";
import coder from "./pic/coding-freak.gif";

export default function About() {
  return (
    <div className="Container-fluid big-box" id="About">
      <div className="head">
        <h1>About me</h1>
      </div>
      <div className="content">
        <div className="box3">
          <img src={coder} alt="gif" />
        </div>
        <div className="box4">
          <p>
            I am a 2nd year Undergraduate (2019-2023) pursuing B.Tech from
            Inderprastha Engineering College in Information Techonolgy. I am
            always polishing my programming skills, data structures and
            algorithms. Other than being a passionate Web developer, I have also
            worked as freelance content writer for few months under my elder
            brother supervision. Besides creating beautiful Website designs, I
            also love to draw animated characters.
          </p>
        </div>
      </div>
    </div>
  );
}

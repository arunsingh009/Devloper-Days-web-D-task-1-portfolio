import React from "react";
import "./home.css";
import arun from "./pic/arun.jfif";

export default function Home() {
  return (
    <div className="Container-fluid badabox">
      <div className="box1">
        <h1 className="h1 glow">Hello</h1>
        <h3 className=" glow">I am Arun Singh</h3>
        <h2 className=" glow">Frontend Web Developer</h2>
      </div>
      <div className="box2">
        <img src={arun} alt="mypic" />
      </div>
    </div>
  );
}

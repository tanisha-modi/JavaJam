import React from "react";
import steps from "../images/steps.png";
import step1 from "../images/step1.png";
import "./Steps.css";

function Steps() {
  return (
    <div className="steps-container">
      <h2>Steps to install</h2>
      <div className="stepss">
        <div className="steps-left">
          <img src={steps} alt="" />
        </div>
        <div className="steps1">
          <div className="s1">
            <p>abs</p>
            <img src={step1} alt="" />
          </div>
          <div className="s1">
            <p>abs</p>
            <img src={step1} alt="" />
          </div>
        </div>
        <div className="steps2">
          <div className="s2">
            <p>abs</p>
            <img src={step1} alt="" />
          </div>
          <div className="s2">
            <p>abs</p>
            <img src={step1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;

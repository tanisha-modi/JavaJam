import React from "react";
import steps from "../images/steps.png";
import m1 from "../images/1.png";
import m2 from "../images/2.png";
import m3 from "../images/3.png";
import m4 from "../images/4.png";
import a1 from "../images/Vector 1.png";
import "./Steps.css";

function Steps() {
  return (
    <div className="steps-container">
      <h2>Steps to install</h2>
      <div className="stepss">
        <div className="steps-left">
          <img src={steps} alt="" />
        </div>
        <div className="steps-right">
          <p>Step 1 : Open setup and Click next button on dialog box.</p>
          <div className="s1">
            <img className="step" src={m1} alt="" />
            <div className="arr">
              <img className="arrow" src={a1} alt="" />
            </div>
          </div>
          <p>Step 1 : Open setup and Click next button on dialog box.</p>
          <div className="s1">
            <div className="arr">
              <img className="flip arrow" src={a1} alt="" />
            </div>
            <img className="step" src={m3} alt="" />
          </div>
          <p>Step 1 : Open setup and Click next button on dialog box.</p>
          <div className="s1">
            <img className="step" src={m2} alt="" />
            <div className="arr">
              <img className="arrow" src={a1} alt="" />
            </div>
          </div>
          <p>Step 1 : Open setup and Click next button on dialog box.</p>
          <div className="s1">
            <div className="arr"></div>
            <img className="step" src={m4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;

import React from "react";
import "./Hero.css";
import image1 from "../images/Hero.jpg";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
    <div className="hero">
      <div className="upper">
        <h1>JavaJam</h1>
        <h5>Quiz</h5>
      </div>
      <div className="lower">
        <div className="text">
          <h2>Become Java Genius with JavaJam</h2>
          <span>Unleash your inner Java genius and reign supreme!</span>
          <button className="btn"><a href='https://drive.google.com/uc?export=download&id=1SPqRDc-kSGef-LLp9yKcNxetVHNknbP9
'>Download</a></button>
          <p>
            Already downloaded?{" "}
            <Link className="link" to="/steps">
              <strong>Steps to install</strong>
            </Link>
          </p>
        </div>
        <div className="imaging">
          <img className="image1" src={image1} alt="" />
        </div>
      </div>
       
 
      </div>
  <div className="video-container">
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/QJ8ewfNxC1I?autoplay=1`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="video"
    />
  </div>
  </div>
  <div className="steps-container">
   
  </div>
      </>
  );
}

export default Hero;

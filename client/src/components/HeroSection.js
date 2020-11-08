import React from "react";
// import '../App.css';
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>TRANSPARATION</h1>
      <p>Your Complete Ration Portal !! </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          pathTo="/login"
        >
          Login
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          pathTo="/add"
        >
          Feedback
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

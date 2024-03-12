import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>I LIKE ARLYNN</h1>
      <p>GIVE HER MONEY</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          SHOP NOW!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import BtnGlow from "../BtnGlow";
import "./About.css";

function About({ aboutRef, aboutIsVisible }) {
  return (
    <section ref={aboutRef} className="about" id="about">
      <div className={aboutIsVisible ? "about-img about-visible" : "about-img"}>
        <img src="/photo_me.jpg" alt="" />
      </div>
      <div className="about-content">
        <h2 className={aboutIsVisible ? "heading heading-visible" : "heading"}>
          About <span>Me</span>
        </h2>
        <h3 className={aboutIsVisible ? "my-title" : null}>Web Developer</h3>
        <p className={aboutIsVisible ? "my-description" : null}>
          I am highly motivated Computer Science graduate with
          intermediate-level skills in ReactJS, Node.js, and MongoDB, seeking a
          junior developer position to further develop and apply knowledge in
          web development.
        </p>
        <BtnGlow
          link="#"
          value={"Read More"}
          classname={"btn"}
          aboutIsVisible={aboutIsVisible}
        />
      </div>
    </section>
  );
}

export default About;

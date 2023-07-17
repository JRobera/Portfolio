import React, { useEffect } from "react";
import BtnGlow from "../BtnGlow";
import "./Home.css";

function Home({ homeRef, homeIsVisible }) {
  return (
    <section ref={homeRef} className="home" id="home">
      <div
        className={homeIsVisible ? "home-content home-visible" : "home-content"}
      >
        <h3>Hello, It's Me</h3>
        <h1>Robera Abera</h1>
        <h3>
          And I'm a <span>Web Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.. Minima, nisi
          porro? Repudiandae, iste doloribus.
        </p>
        <div className="social-media">
          <a href="#">
            <box-icon type="logo" name="facebook"></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="twitter"></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="instagram-alt"></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="linkedin"></box-icon>
          </a>
        </div>
        <BtnGlow
          link={"#"}
          btnType={true}
          value={"Download CV"}
          classname={"btn btn-download"}
        />
      </div>
      <div className={homeIsVisible ? "home-img home-img-visible" : "home-img"}>
        <img src="/photo_me.jpg" alt="photo of me" />
      </div>
    </section>
  );
}

export default Home;

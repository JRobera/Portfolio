import React, { useEffect } from "react";
import BtnGlow from "../BtnGlow";
import "./Home.css";
import SocialMedia from "./SocialMedia";

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
          Committed to delivering efficient and scalable solutions while
          continuously expanding expertise in software developmenttechnologies.
        </p>
        <div className="social-media">
          {/* <a href="#">
            <box-icon type="logo" name="facebook"></box-icon>
          </a>
          <a href="#">
            <box-icon type="logo" name="twitter"></box-icon>
          </a> */}
          <SocialMedia link={"https://github.com/JRobera"} name={"github"} />
          {/* <SocialMedia link={"#"} name={"linkedin"} /> */}
        </div>
        <BtnGlow
          link={
            "https://res.cloudinary.com/dbv6hao81/image/upload/v1695114995/Robera_Abera_-_Public_CV_-_CVDesignR_easifq.pdf"
          }
          value={"Download CV"}
          classname={"btn btn-download"}
        />
      </div>
      <div className={homeIsVisible ? "home-img home-img-visible" : "home-img"}>
        <img src="/images.jpg" alt="photo of me" />
      </div>
    </section>
  );
}

export default Home;

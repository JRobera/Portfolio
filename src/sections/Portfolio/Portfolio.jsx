import React from "react";
import "./Portfolio.css";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.jfif";
import p4 from "../../assets/p4.jfif";
import p5 from "../../assets/p5.jfif";
import p6 from "../../assets/p6.jfif";

function Portfolio({ portfolioRef, portfolioIsVisible }) {
  return (
    <section ref={portfolioRef} className="portfolio" id="portfolio">
      <h2
        className={portfolioIsVisible ? "heading heading-visible" : "heading"}
      >
        Latest <span>Project</span>
      </h2>

      <div
        className={
          portfolioIsVisible
            ? "portfolio-container portfolio-container-visible"
            : "portfolio-container"
        }
      >
        <div className="portfolio-box">
          <img src={p1} alt="" />
          <div className="portfolio-layer">
            <h4>Advice Generator</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="https://jrobera.github.io/Advice-generator-app/">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={p2} alt="" />
          <div className="portfolio-layer">
            <h4>ToDo App</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="https://jrobera.github.io/Todo-app/">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={p3} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="#">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={p4} alt="" />
          <div className="portfolio-layer">
            <h4>ToDo App</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="https://jrobera.github.io/Todo-app/">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={p5} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="#">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
        <div className="portfolio-box">
          <img src={p6} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              quibusdam assumenda expedita ipsa natus.
            </p>
            <a href="#">
              <box-icon name="link-external"></box-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

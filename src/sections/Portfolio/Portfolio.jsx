import React from "react";
import "./Portfolio.css";
import projects from "../../assets/prolist";
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
        {projects?.map((project, i) => {
          return (
            <div className="portfolio-box" key={i}>
              <img src={project?.image} alt="" />
              <div className="portfolio-layer">
                <h4>{project?.name}</h4>
                <p>{project?.description}</p>
                <div className="portfolio-links">
                  <a href={project?.livelink} target="_blank">
                    <box-icon name="link-external"></box-icon>
                  </a>
                  <a href={project?.github} target="_blank">
                    <box-icon name="code-alt"></box-icon>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ColorRing } from "react-loader-spinner";
import "./Portfolio.css";
import axios from "axios";

function Portfolio({ portfolioRef, portfolioIsVisible }) {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery(["projects"], () => {
    return axios
      .get("https://roberas-api.onrender.com/api/get-projects")
      .then((response) => {
        return response.data;
      });
  });
  if (isLoading) {
    return (
      <ColorRing
        visible={true}
        height="90"
        width="90"
        ariaLabel="blocks-loading"
        wrapperStyle={{ width: "100%" }}
        wrapperClass="blocks-wrapper"
        colors={["#0ef", "#0ef", "#0ef", "#0ef", "#0ef"]}
      />
    );
  }
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

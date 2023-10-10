import React from "react";
import "../sections/Portfolio/Portfolio.css";
import Skeleton from "./Skeleton";

function ProjectSkeleton() {
  return (
    <div className="portfolio-box">
      <Skeleton className="image" />
    </div>
  );
}

export default ProjectSkeleton;

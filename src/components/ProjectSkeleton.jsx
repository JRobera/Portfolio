import React from "react";
import Skeleton from "./Skeleton";

function ProjectSkeleton() {
  return (
    <div className="portfolio-box">
      <Skeleton className="image" />
      <Skeleton className="text" />
    </div>
  );
}

export default ProjectSkeleton;

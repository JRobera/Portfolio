import React from "react";

const Skeleton = ({ className }) => {
  const classNames = `skeleton ${className} animate-pulse`;
  return <div className={classNames}></div>;
};

export default Skeleton;

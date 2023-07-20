import React from "react";
import "./BtnGlow.css";
function BtnGlow({ link, value, classname, aboutIsVisible }) {
  return (
    <a
      href={link}
      className={aboutIsVisible ? classname + " btn-visible" : classname}
    >
      {value}
    </a>
  );
}

export default BtnGlow;

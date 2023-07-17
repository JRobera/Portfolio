import React from "react";
import "./BtnGlow.css";
function BtnGlow({ link, value, classname, btnType, aboutIsVisible }) {
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

import React, { useContext } from "react";
import { AppContext } from "../../App";

function Links({ url, name, classname }) {
  const {
    homeIsVisible,
    aboutIsVisible,
    portfolioIsVisible,
    contactIsVisible,
  } = useContext(AppContext);

  return (name === "Home" && homeIsVisible) ||
    (name === "About" && aboutIsVisible) ||
    (name === "Portfolio" && portfolioIsVisible) ||
    (name === "Contact" && contactIsVisible) ? (
    <a href={url} className={classname}>
      {name}
    </a>
  ) : (
    <a href={url}>{name}</a>
  );
}

export default Links;

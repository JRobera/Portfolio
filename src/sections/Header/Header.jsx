import React, { useState } from "react";
import "./Header.css";
import Links from "./Links";

function Header() {
  const [active, setActive] = useState(false);
  const links = [
    { url: "#home", name: "Home", classname: "active" },
    { url: "#about", name: "About", classname: "active" },
    { url: "#portfolio", name: "Portfolio", classname: "active" },
    { url: "#contact", name: "Contact", classname: "active" },
  ];
  return (
    <header className="header">
      <a href="#" className="logo">
        Portfolio
      </a>
      <box-icon
        color="white"
        id="menu-icon"
        name={active ? "x" : "menu"}
        onClick={() => {
          setActive(!active);
        }}
      ></box-icon>

      <nav className={active ? "navbar collapse" : "navbar"}>
        {links.map((link, i) => {
          return (
            <Links
              key={i}
              url={link.url}
              name={link.name}
              classname={link.classname}
            />
          );
        })}
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";

function SocialMedia({ link, name }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <a href={link}>
      <box-icon
        type="logo"
        animation="flashing"
        color={!isActive ? "#0ef" : null}
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseOut={() => {
          setIsActive(false);
        }}
        name={name}
      ></box-icon>
    </a>
  );
}

export default SocialMedia;

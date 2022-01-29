import React from "react";

import "./Button.css";

const Button = ({
  children,
  bgColor = "black",
  padding = "0.75em 1.5em",
  color = "white",
  fontSize = "1.6rem",
  width = "auto",
  clickHandler,
}) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: bgColor,
        padding,
        color,
        fontSize,
        width,
      }}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

import "./Button.css";

const Button = ({
  text,
  bgColor = "black",
  padding = "0.75em 1.5em",
  color = "white",
  fontSize = "1.6rem",
  clickHandler,
}) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: bgColor,
        padding: padding,
        color: color,
        fontSize: fontSize,
      }}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;

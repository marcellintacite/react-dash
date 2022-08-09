import React from "react";
import "./Button.css";

export default function ButtonLoad({
  label,
  width,
  height,
  color,
  load,
  textcolor,
}) {
  return (
    <button
      className="btn"
      style={{ width, height, background: color, color: textcolor }}
    >
      {load ? <div className="loadbtn"></div> : label}
    </button>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkbuttonstyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkbuttonsize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkbuttonstyle},${checkbuttonsize}`}
        onclick={onclick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

import React from "react";
import "./Button.css";

const Button = (props) => {
  const { variant = "primary", type, children, placeholder, ...rest } = props;
  return (
    <div>
      <button className={`button ${variant}`}>{children}</button>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Button;

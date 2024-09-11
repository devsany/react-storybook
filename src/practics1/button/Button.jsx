import React from "react";

const Button = (props) => {
  const { variant = "primary", children } = props;
  return (
    <div>
      <button className={`button ${variant}`}>{children}</button>
    </div>
  );
};

export default Button;

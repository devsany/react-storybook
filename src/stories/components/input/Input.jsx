import React from "react";
import "./input.css";

const Input = (props) => {
  const { size, placeholder, header,headerClass } = props;
  return (
    <div>
      <p data-testid='input_paragraph' className={headerClass}>{header}</p>
      <input type="text" placeholder={placeholder} className={`${size}`} />
    </div>
  );
};

export default Input;

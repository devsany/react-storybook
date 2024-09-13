import React from "react";

const Textbox = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <input
        className={`input ${props.size}`}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default Textbox;

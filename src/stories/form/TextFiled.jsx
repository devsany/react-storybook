import React, { useState } from "react";
import Form from "./Form";

const TextFiled = (props) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(true);
  };
  return (
    <div>
      {toggle && <Form />}
      name of user:{props.name}
      email of user:{props.email}
      <button onClick={handleClick}>Back</button>
    </div>
  );
};

export default TextFiled;

import React, { useState } from "react";
import "./form.css";
import TextFiled from "./TextFiled";

const Form = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    setShowMessage(true);
  };
  return (
    <div>
      {showMessage ? (
        <TextFiled name={username} email={email} />
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;

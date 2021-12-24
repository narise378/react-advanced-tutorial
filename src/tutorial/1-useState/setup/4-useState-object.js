import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "narita",
    age: 33,
    message: "random message",
  });

  const [name, setName] = useState('narita')
  const [age, setAge] = useState(33)
  const [message, setMessage] = useState('random message')

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world" });
    setMessage('hello world')
    setAge(34)
    setName('Akinobu')
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

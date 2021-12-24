import React, { useState } from 'react';
// use 
// componet name must be uppercase
// must be in the function/componet body
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState('hello world'))
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [ text, setText ] = useState('random title')
  const handleClick = () => {
    if( text === 'random title' ) {
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </>
  )
};

export default UseStateBasics;

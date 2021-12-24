import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [peple, setPeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = peple.filter((person) => person.id !== id)
    setPeople(newPeople)
  }
  return (
    <>
      {
        peple.map((person) =>{
          const {id, name} = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          )
        })
      }
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
};

export default UseStateArray;

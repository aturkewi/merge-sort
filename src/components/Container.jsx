import React, { useState } from 'react';
import '../App.css';

function Container() {
  const [numbers, setNumbers] = useState([])

  const resetNumbers = () => {
    const nums = []
    for(let i=0; i < 10; i++){
      nums.push(getRandNum())
    }
    setNumbers(nums)
  }

  const getRandNum = () => (Math.floor(Math.random() * Math.floor(100)))
  return (
    <div>
      <button onClick={resetNumbers}>
        ResetNumbers
      </button>
      <ul>
        {numbers.map( (num, i) => {
          return (<li key={i}>{num}</li>)
        })}
      </ul>
    </div>
  );
}

export default Container;

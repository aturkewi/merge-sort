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

  const sort = (nums) => {
    const sorted = split(nums)
    setNumbers(sorted)
  }

  const merge = (array1, array2) => {
    let p1 = 0
    let p2 = 0
    const array1Length = array1.length
    const array2Length = array2.length
    const merged = []
    let count = 0
    while(p1 < array1Length || p2 < array2Length){
      count++
      if(array1[p1] === undefined){
        merged.push(array2[p2])
        p2++
      }else if (array2[p2] === undefined) {
        merged.push(array1[p1])
        p1++
      }else if(array1[p1] < array2[p2] ){
        merged.push(array1[p1])
        p1++
      }else{
        merged.push(array2[p2])
        p2++
      }
      if(count > 15){
        debugger
        break
      }
    }
    return merged
  }

  const split = (nums) => {
    const length = nums.length
    if(length > 1){
      const firstSection = nums.splice(0, Math.floor(length / 2))
      return merge(split(firstSection), split(nums))
    }else{
      return nums
    }
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
      {numbers.length > 0 ?
          <button onClick={() => sort(numbers)}>Sort!</button>
        :
          ''
      }
    </div>
  );
}

export default Container;

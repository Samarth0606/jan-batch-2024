import React from 'react'

function Child({sum}) {
    let num1 = 10;
    let num2 = 20;
    sum(num1,num2)
  return (
    <div>Child</div>
  )
}

export default Child
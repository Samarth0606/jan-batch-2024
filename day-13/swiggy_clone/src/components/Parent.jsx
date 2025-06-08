import React from 'react'
import Child from './Child';

function Parent() {
    function sum(a,b){
        console.log(a);
        console.log(b);
        console.log(a+b);
    }
  return (
    <div>
        <h1>Parent</h1>
        <Child sum={sum} />
    </div>
  )
}

export default Parent
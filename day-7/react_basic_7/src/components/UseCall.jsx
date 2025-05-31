import { memo, useCallback, useState } from "react";

function UseCall() {
    let [count,setCount] = useState(0);
    // let a = 1;
    // let a = function(){ console.log("balle balle") };
    let a = useCallback( function(){ console.log("balle balle") } , [])
  return (
    <div>
        <Demo sam={a} />
        <button onClick={()=>setCount(count+1)}>Click Count- {count}</button>
    </div>
  )
}

let Demo = memo(function ({sam}){
    console.log("hello");
    return(
        <div>
            <h1>prop: {sam()}</h1>
        </div>
    )
})

export default UseCall
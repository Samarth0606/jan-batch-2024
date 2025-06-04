import { useState } from "react";
function A(){
    let [count,setCount] = useState(0)
    return(
        <div> 
            <h1>A</h1> 
            <B couting={count} setCount={setCount} />  
        </div>
    )
}
function B({couting,setCount}){
    return(
        <div><h1>B</h1> <C couting={couting} setCount={setCount} /> </div>
    )
}
function C({couting,setCount}){
    return(
        <div><h1>C</h1> <D couting={couting} setCount={setCount} /> </div>
    )
}
function D({couting,setCount}){
    return(
        <div>
            <h1>D: {couting}</h1> 
            <button onClick={()=>setCount(couting+1)}>Inc</button>
        </div>
    )
}

export default A;
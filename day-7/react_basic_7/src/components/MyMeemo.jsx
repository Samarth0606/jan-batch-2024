import { useState } from "react"

function MyMeemo() {
    const [count,setCount] = useState(0);
    const [inp1,setInp1] = useState("");
    const [inp2,setInp2] = useState("");

    function handleClick(){
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
    let ans=0; 
    for(let i=1;i<=inp1;i++){
        ans+=i
    }
    // mul
    let ans2=1; 
    for(let i=1;i<=inp2;i++){
        ans2*=i
    }

  return (
    <div>
        <input onChange={(e)=>setInp1(e.target.value)} type="number" value={inp1} />
        <h1>inp1 = {ans}</h1>
        <input onChange={(e)=>setInp2(e.target.value)} type="number" value={inp2} />
        <h1>inp2 = {ans2}</h1>
        <button onClick={handleClick} >Inc: {count} </button>
    </div>
  )
}

export default MyMeemo
import { useMemo, useState } from "react";

function UseMemooo(){
    const [count,setCount] = useState(0);
    function handleInc(){
        setCount(count+1)
    }

    return(
        <div>
            <Raj />
            <button onClick={handleInc} >Increment: {count}</button>
        </div>
    )
}

function Raj(){
    const [inp,setInp] = useState("");

    function handleInput(event){
        setInp(event.target.value)
    }
    const finalAns = useMemo(()=>{
        let ans = 0;
        for(let i = 1;i<=inp;i++){
            console.log("i am loop");
            ans+=i;
        }
        return ans
    }, [inp])
    
    return(
        <div>
             <input onChange={handleInput} type="number" value={inp} />
             <h1>Sum is: {finalAns} </h1>
        </div>
    )
}

export default UseMemooo;
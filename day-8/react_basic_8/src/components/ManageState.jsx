import { useRef, useState } from "react";

function ManageState(){
    const [count,setCount] = useState(0);
    const countRef = useRef(0);
    
    function handleClick(){
        setCount(count+1)
    }
    function handleRef(){
        countRef.current++
    }

    return(
        <div>
            <button onClick={handleRef} >Ref BTN INC: {countRef.current}</button>
            <button onClick={handleClick} >INC: {count}</button>
        </div>
    )
}

export default ManageState;
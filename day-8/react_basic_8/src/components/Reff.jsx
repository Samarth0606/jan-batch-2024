import { useEffect, useRef } from "react";

function Reff(){
    // let salary = 300000;
    let spanEl = useRef("1000")
    console.log(spanEl , "spanEl");
    
    useEffect(()=>{
        setTimeout(()=>{
            // document.getElementById('salary').innerHTML = "20000"
            spanEl.current.innerHTML = "20"
        } , 3000)
    } , [])

    return (
        <div>
            <h1>Salary is <span ref={spanEl} >{spanEl.current}</span> </h1>
        </div>
    )
}

export default Reff;
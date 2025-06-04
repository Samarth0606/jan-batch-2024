import { useContext, useState } from "react";
import { CountContext } from "./Context";

function PropDrilling(){
    let [count,setCount] = useState(0);
    return(
        <div>
            <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    )
}
function Count({setCount}){
    return(
        <div>
            <CountRender />
            <Button setCount={setCount} />
        </div>
    )
}
function CountRender(){
    const sam = useContext(CountContext);
    return(
        <div>
            <h1>Sam: {sam}</h1>
        </div>
    )
}

function Button({setCount}){
    const samm = useContext(CountContext);
    return(
        <>
            <button onClick={()=> setCount(samm+1)}>Inc</button>
            <button onClick={()=> setCount(samm-1)}>Dec</button>
        </>
    )
}

export default PropDrilling;
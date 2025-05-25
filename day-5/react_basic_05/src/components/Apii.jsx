import { useEffect, useState } from "react";

function Apii(){
    console.log("i am before state");

    let [arr,setArr] = useState([]);

    console.log("i am after state");
    
    console.log("i am before effect");

    // executes after your render
    // only execute once during render ✅ / reredner ❌
    useEffect( ()=>{
        async function callingApi(){
            let resp = await fetch("https://dummyjson.com/products");
            let data = await resp.json();
            console.log(data.products , "data");
            setArr(data.products) //change in state
        }
        callingApi()
    } , [] )

    console.log("i am after effect");
    return(
        <>
            <h1>Calling APi</h1>

            {arr.map((product)=>{
                return(
                    <div>
                        <h1>{product.id}</h1>
                        <h2>{product.brand}</h2>
                        <h3>{product.title}</h3>
                    </div>
                )
            })}
        </>
    )
}

export default Apii;
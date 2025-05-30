import { useEffect, useState } from "react";

function Fetching(){

    const [todosArr,setTodosArr] = useState([])
    // Call API
    const API = "https://jsonplaceholder.typicode.com/todos";
    useEffect(function(){
        async function apiCalling(){
            let resp = await fetch(API);
            let data = await resp.json();
            setTodosArr(data)
        }
        apiCalling()
    } , [])


    return(
        <div>
            {todosArr.map((todo)=>{
                return(
                    <div>
                        <h1>{todo.id}</h1>
                        <h1>{todo.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Fetching;
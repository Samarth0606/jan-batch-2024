import { useEffect, useState } from "react"

function LifeCycle() {

    const [count,setCount] = useState(0)
    useEffect(()=>{
        if(count === 0){
            console.log("component did mount");
        }
        if(count>0 && count<5) console.log("component did update");
        
        if(count === 5){
            return ()=>{
                console.log("component will unmount");
            }
        }
    } , [count])

  return (
    <div>
        <button onClick={()=> setCount(count+1)} >Click: {count}</button> 
    </div>
  )
}

export default LifeCycle
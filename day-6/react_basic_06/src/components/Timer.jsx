// import { useEffect, useState } from "react"

// function Timer(){

//     const [time,setTime] = useState(0)

//     useEffect(()=>{
//         let id = setInterval(function(){
//             setTime(time+1)
//         } , 1000)
//         //cleanup fn
//         return ()=> clearInterval(id)
//     } ,[time])

//     return(
//         <div>
//             <h1>Timer: {time}</h1>
//         </div>
//     )
// }

// export default Timer;

// --------------------------------

import { useEffect, useState } from "react"

function Timer(){

    const [time,setTime] = useState(0)

    useEffect(()=>{
        setTimeout(function(){
            setTime(time+1)
        } , 1000)
    } ,[time])

    return(
        <div>
            <h1>Timer: {time}</h1>
        </div>
    )
}

export default Timer;
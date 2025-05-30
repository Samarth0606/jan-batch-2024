// import { useState } from "react";
// function Monkey({lolipop}){
//     return(
//         <>
//             <BadaMonkey  lol={lolipop} />
//             <ChotaMonkey lol="5" />
//             <ChotaMonkey lol="6" />
//             <ChotaMonkey lol="7" />
//         </>
//     )
// }

// function BadaMonkey({lol}){
//     let [glass,setGlass] = useState(lol);
//     function handleClick(){
//         setGlass(Math.floor(Math.random()*10))
//     }
//     return(
//         <>
//             <ChotaMonkey lol={glass} />
//             <button onClick={handleClick} >click</button>
//         </>
//     )
// }

// function ChotaMonkey({lol}){
//     return (
//         <>
//             <h1>Lolipop: {lol} </h1>
//         </>
//     )
// }

// export default Monkey;

// ---------------------------------

import { memo, useState } from "react";
function Monkey({lolipop}){

    let [glass,setGlass] = useState(lolipop);
    function handleClick(){
        setGlass(Math.floor(Math.random()*10))
    }

    return(
        <div>
            <ChotaMonkey lol={glass} />
            <button onClick={handleClick} >click</button>
            <ChotaMonkey lol="5" />
            <ChotaMonkey lol="6" />
            <ChotaMonkey lol="7" />
        </div>
    )
}

let ChotaMonkey = memo(function ({lol}){
    return (
        <>
            <h1>Lolipop: {lol} </h1>
        </>
    )
})

// function ChotaMonkey({lol}){
//     return (
//         <>
//             <h1>Lolipop: {lol} </h1>
//         </>
//     )
// }

export default Monkey;
// import { Fragment, useState } from "react";

// function Counter(){

//     // let [state,fn] = useState() //hook
//     let [count,setCount] = useState(0) 

//     function handleInc(){
//         // setCount(count+1)
//         setCount(11)
//     }
//     function handleDec(){
//         // setCount(count-1)
//         setCount(-51)
//     }

//     return(
//         <Fragment>
//             <button onClick={handleInc} >+</button>
//             <h1>counter: {count} </h1>
//             <button onClick={handleDec} >-</button>
//         </Fragment>
//     )
// }

// export default Counter;

// -----------------------------

import { Fragment, useState } from "react";

function Counter(){

    let [count,setCount] = useState(0) 

    return(
        <Fragment>
            {/* <button onClick={handleClick}>click</button> */}
            {/* <button onClick={  ()=>{ return setCount(count+1) }  } >+</button> */}
            <button onClick={ ()=>setCount(count+1) } >+</button>
            <h1>counter: {count} </h1>
            <button onClick={ ()=>setCount(count-1) } >-</button>
        </Fragment>
    )
}

export default Counter;
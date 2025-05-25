// import { useState } from "react";

// function Step3(){
//    const [val,setVal] = useState(10);
// //    const [sam,setSam] = useState(5);

//    function handleNeg(){
//     console.log(val , "before"); // 10
    
//     setVal(val-2) // async => 10 - 2 => val 8
//     console.log(val , "after 1"); // 10
    
//     setVal(val-1) // async => 10 - 1 => val 9
//     console.log(val , "after 2"); // 10

//     setVal(val-2) // async => 10 - 2 => val 8
//     console.log(val , "last"); // 10

//    }
//    function handlePos(){
//     setVal(val+1)
//     setVal(val+1)
//     setVal(val+1)
//    }

//     return(
//         <div>
//             <button onClick={handleNeg} > - </button>
//             <h1> {val} </h1>
//             <button onClick={handlePos} > + </button>
//         </div>
//     )
// }

// export default Step3;


// ---------------------------------------------

import { useState } from "react";

function Step3(){
   const [val,setVal] = useState(10);
//    const [sam,setSam] = useState(5);

   function handleNeg(){
    console.log(val , "before"); 
    setVal( (val)=>val-1 ) // " ()=> ", has the access of the previous value
    console.log(val , "after 1");
    setVal( val-1 ) // prev access nhi hai
    console.log(val , "after 2");
    setVal( (val)=>val-1 ) 
    console.log(val , "last");
   }
   function handlePos(){
    setVal(val+1)
    setVal(val+1)
    setVal(val+1)
   }

    return(
        <div>
            <button onClick={handleNeg} > - </button>
            <h1> {val} </h1>
            <button onClick={handlePos} > + </button>
        </div>
    )
}

export default Step3;
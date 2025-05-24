// function Anonymous(){

import { useState } from "react";

//     let naam = "Samarth Vohra";
//     function handleLogout(){
//         console.log(naam , "1");
//         naam = "Anonymous"
//         console.log(naam , "2");
//     }

//     return(
//         <>
//             <h1>Name : {naam} </h1>
//             <button onClick={handleLogout} >LOGOUT</button>
//         </>
//     )
// }

// export default Anonymous;


// --------------------------------

function Anonymous(){

    const [naaam,setNaaam] = useState("Samarth Vohra")
    function handleLogout(){
        // naaam = "anonymous" //❌ wromg we cant change directly
        setNaaam("anonymous")  //✅ right
    }
       
    
    return(
        <>
            <h1>Name : {naaam} </h1>
            <button onClick={handleLogout} >LOGOUT</button>
        </>
    )
}

export default Anonymous;
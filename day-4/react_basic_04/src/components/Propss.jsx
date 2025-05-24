// import { Fragment } from "react";

// function Propss(props){
//     console.log(props , "props");
    
//     return(
//         <Fragment>
//             <h1>{props.age}</h1>
//             <h1>{props.naam}</h1>
//             <h1>{JSON.stringify(props.isMale)}</h1>
//         </Fragment>
//     )
// }

// export default Propss;


// ----------------------------

import { Fragment } from "react";

function Propss({age,naam,isMale}){
    
    return(
        <Fragment>
            <h1>{age}</h1>
            <h1>{naam}</h1>
            <h1>{JSON.stringify(isMale)}</h1>
        </Fragment>
    )
}

export default Propss;
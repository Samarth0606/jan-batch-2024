// import Samarth from "./components/Samarth";
// import React from "react";

// function App(){
//   return(
//     <React.Fragment>
//       <Samarth />
//       <Samarth />
//     </React.Fragment>

//   )
// }

// export default App

// ------------------------------------

import { Fragment } from "react";
import Samarthhh from "./components/Samarth";
import { Maverick } from "./components/Maverick";
import Ternaryy from "./components/Ternaryy";
import Mapping from "./components/Mapping";
import Propss from "./components/Propss";
import Parent from "./components/Parent";
import Events from "./components/MyEvents";
import Anonymous from "./components/Anonymous";
import Counter from "./components/Counter";
// import { Fragment } from "react";

function App(){
  return(
    <Fragment>
      <>
        {/* <Samarthhh />
        <Samarthhh />
        <Maverick />
        <Ternaryy />
        <Mapping />
        <Propss age={21} isMale={true} naam="Samarth"  />
        <Propss age={25} isMale={false} naam="Prachi"  /> */}
        {/* <Parent /> */}
        {/* <Events /> */}
        <Anonymous />
        <Counter />
      </>
    </Fragment>
  )
}

export default App
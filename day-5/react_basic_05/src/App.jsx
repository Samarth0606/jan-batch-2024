// import { Fragment, useState } from "react";

// function App(){
//   const [money,setMoney] = useState(0);

//   function handleClick1(){ setMoney(1) }
//   function handleClick2(){ setMoney(2) }
//   function handleClick3(){ setMoney(5) }
//   function handleClick4(){ setMoney(10) }
//   function handleClick5(){ setMoney(20) }
//   function handleClick6(){ setMoney(50) }
//   function handleClick7(){ setMoney(100) }

//   return(
//     <Fragment>
//       <button onClick={handleClick1} >1</button>
//       <button onClick={handleClick2} >2</button>
//       <button onClick={handleClick3} >5</button>
//       <button onClick={handleClick4} >10</button>
//       <button onClick={handleClick5} >20</button>
//       <button onClick={handleClick6} >50</button>
//       <button onClick={handleClick7} >100</button>
//       <h1>Rupees: {money} </h1>
//     </Fragment>
//   )
// }

// export default App;
// --------------------------------------------------------
// import { Fragment, useState } from "react";


// function App(){
//   const [money,setMoney] = useState(0);
//   return(
//     <Fragment>
//       <button onClick={()=> setMoney(1) } >1</button>
//       <button onClick={()=> setMoney(2) } >2</button>
//       <button onClick={()=> setMoney(5) } >5</button>
//       <button onClick={()=> setMoney(10) } >10</button>
//       <button onClick={()=> setMoney(20) } >20</button>
//       <button onClick={()=> setMoney(50) } >50</button>
//       <button onClick={()=> setMoney(100) } >100</button>
//       <h1>Rupees: {money} </h1>
//     </Fragment>
//   )
// }

// export default App;

// --------------------------------------------------


import { Fragment } from "react";
// import Step3 from "./components/Step3";
import Apii from "./components/Apii";


function App(){
  return(
    <Fragment> 
      {/* <Step3 /> */}
      <Apii />
    </Fragment>
  )
}

export default App;
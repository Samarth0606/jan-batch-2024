import LifeCycle from "./components/LifeCycle"
import ManageState from "./components/ManageState"
import Reff from "./components/Reff"

function App() {
  return (
    <div>
      {/* <Reff /> */}
      {/* <ManageState /> */}
      <LifeCycle />
    </div>
  )
}

export default App


// ---------------------------------------

// class based component eg
// import React from "react";

// export default class App extends React.Component{

//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }

//   componentDidMount(){
//     console.log("i am did mount");
//   }
//   decrease(){
//     this.setState({count:this.state.count-1})
//   }

//   componentWillUnmount(){
//     if(this.state.count === 5){
//       console.log("i am deleting");
//       console.log("component is removed");
//     }
//   }

//     render(){
//         return(
//             <div>
//               <h1>{this.state.count}</h1>
//               <button onClick={()=> this.setState({count:this.state.count+1})} >Inc:</button>
//               <h1>Hello</h1>
//               <Counter count={this.state.count} />
//               <button onClick={this.decrease.bind(this)} >Dec </button>
//             </div>
//         )
//     }
// }


// class Counter extends React.Component{

//   componentDidUpdate(prevProp,prevState){
//     if(this.props.count !== prevProp.count){
//       console.log("i am updating");
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1> {this.props.count} </h1>
//       </div>
//     )
//   }
// }
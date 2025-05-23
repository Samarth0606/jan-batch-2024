import Demo1 from "./components/Demo01"
import Demo2 from "./components/Demo02"
import Propss from "./components/Propss"

function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Demo1 /> */}
      {/* <Demo2 /> */}
      <Propss name="samarth" age={21} isPetParent={true}  />
    </div>
  )
}


export default App
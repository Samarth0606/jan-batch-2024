import { useState } from "react"
import Parent from "./Parent"

function Drilling() {
    let [agee,setAgee] = useState(25);
  return (
    <div>
        <h1>WELCOME TO MAIN PAGE - {agee}</h1>
        <Parent agee={agee} setAgee={setAgee} />
    </div>
  )
}

export default Drilling
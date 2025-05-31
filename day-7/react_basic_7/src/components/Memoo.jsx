import { memo, useState } from "react";

function Memo(){
    const [naam,setNaam] = useState("Rahul");
    function handleChange(){
        setNaam(Math.floor(Math.random()*10))
    }
    return (
        <div>
            <MyMemo name={naam} />
            <button onClick={handleChange} >Change me</button>
            <MyMemo name="Samarth" />
            <MyMemo name="Maverick" />
            <MyMemo name="Kashish" />
        </div>
    )
}
const MyMemo = memo(function ({name}){
    return(
        <div>
            Naam is: {name}
        </div>
    )
})


export default Memo;
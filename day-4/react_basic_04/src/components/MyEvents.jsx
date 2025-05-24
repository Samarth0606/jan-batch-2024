
function Events() {

    function handleSlap(){
        console.log("thappadh se darr nhi lgta sahab");
    }
    function handleKick(a,b,c){
        console.log(a,b,c);
    }

  return (
    <div>
        <div onClick={handleSlap} >CLick me</div>
        <button onClick={()=>handleKick(10,20,30)} >CLick me</button>
    </div>
  )
}

export default Events
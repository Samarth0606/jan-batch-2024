import Button from "./Button"

function Parent({agee,setAgee}) {
    
  return (
    <div>
        <h2>Name: MANISH</h2>
        <h2>Age: {agee}</h2>
        <h2>isFav: Red</h2>
        <Button agee={agee} setAgee={setAgee}  />
    </div>
  )
}

export default Parent
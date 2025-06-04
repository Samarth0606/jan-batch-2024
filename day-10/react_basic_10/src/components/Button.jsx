
function Button({agee,setAgee}) {
    function handleChange(){
        setAgee(16)
    }
  return (
    <>
        <h1>Age: {agee}</h1>
        <button onClick={handleChange}>Logout</button>
    </>
  )
}

export default Button
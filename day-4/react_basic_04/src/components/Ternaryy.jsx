function Ternaryy(){
    let magicNum = 7;
    let RN = Math.floor(Math.random()*10)

    return(
        <div>
            {
                magicNum === RN ? <h1>Hello magic</h1> : <h1>Bye magic</h1>
            }
        </div>
    )
}

export default Ternaryy
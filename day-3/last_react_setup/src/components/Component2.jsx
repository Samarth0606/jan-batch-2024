function Component2(){
    let favNum = 7;
    let RN = Math.floor(Math.random()*10)
    
    return(
        <div>
            {
              // ternary operator
              (favNum > RN) ? <h1>I WON</h1> : <p>I LOST</p>
            }

        </div>
    )
}

export default Component2;
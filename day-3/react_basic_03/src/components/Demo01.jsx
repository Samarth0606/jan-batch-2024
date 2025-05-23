function Demo1(){
    // 1st universe
    let arr = [10,20,30,40,50]

    // 2nd universe 
    return(
        <div>
            <h1>Demo 1</h1>
            {
                arr.map((item)=>{
                    return (
                        <div>
                            <h1>{item}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Demo1;
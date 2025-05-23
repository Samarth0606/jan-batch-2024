function Component3(){
    let arr = ["samarth" , "is" , "teaching", "web"];

    return(
        <div>
            {   
                arr.map((item)=>{ 
                    return(
                        <h1>{item*2}</h1> 
                    )
                }) 
            }
        </div>
    )
}
export default Component3
function Maverick(){
    // universe-1 => statements => var, for, if, while
    let arr = [10,20,30,40,50]
    let b = 100;

    // universe-2 => conditions => switch, map, filter
    return(
        <div>

            {b}
            {
               arr.map((item)=>{
                    return(
                        <div>
                            <h1> {item} </h1>
                        </div>
                    )
                }) 
            }

            <div>hello mav 1</div>
            <div>hello mav 2</div>
        </div>
    )
}

export default Maverick;
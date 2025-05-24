function Mapping(){
    let arr = ["sam" , "vohra" , 20 , "balle balle"];

    
    return(
        <>
            {
                arr.map((item,index)=>{
                    return(
                        <h1> {index}: {item} </h1>
                    )
                })
            }
        </>
    )
}

export default Mapping
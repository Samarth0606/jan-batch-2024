// function Demo2(){

//     let RN = Math.floor(Math.random()*11 + 2)
//     let magicNum = 7;
//     let el;
//     if(magicNum === RN){
//         el = <h1>Lucky seven {magicNum}</h1>
//     }else{
//         el = <h1>BETTER LUCK NEXT TIME {RN}</h1>
//     }

//     return (
//         <div>
//             {el} 
//         </div>
//     )
// }

// export default Demo2;



function Demo2(){
    let magicNum = 7;
    // let el;
    

    return (
        <div>
            {
                Math.floor((Math.random()*11 + 2)) !== magicNum? <h1>"Better Luck"</h1>  :  <h1>{magicNum}</h1>
            }
        </div>
    )
}

export default Demo2;
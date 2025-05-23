function Component5({favCric,favBowler,bestFielder}){
    // console.log(props, "props");
    // console.log(props.favCric, "props1");
    // console.log(props.favBowler, "props2");
    // console.log(props.bestFielder, "props3");
    
    return(
        <div>
            <h1>Cricket fans</h1>
            <h1>Best cricketer: {favCric}</h1>
            <h1>Best bowler:{favBowler}</h1>
            <h1>Best fielder:{bestFielder}</h1>
        </div>
    )
}

export default Component5;
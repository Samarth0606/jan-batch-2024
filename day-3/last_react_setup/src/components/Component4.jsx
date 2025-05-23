function Component4(props){
    // console.log(props, "props");
    // console.log(props.favCric, "props1");
    // console.log(props.favBowler, "props2");
    // console.log(props.bestFielder, "props3");
    
    return(
        <div>
            <h1>Cricket fans</h1>
            <h1>Best cricketer: {props.favCric}</h1>
            <h1>Best bowler:{props.favBowler}</h1>
            <h1>Best fielder:{props.bestFielder}</h1>
        </div>
    )
}

export default Component4;
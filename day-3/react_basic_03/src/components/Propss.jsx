// function Propss(props){

// function Propss({name,isPetParent,age}){ //destructuring
    // console.log(age , name , isPetParent , "props");


function Propss(props){

    console.log(props.age , props.name , props.isPetParent , "props");

    return(
        <div>
            hi from propss
        </div>
    )
}

export default Propss
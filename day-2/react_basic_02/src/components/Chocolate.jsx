function Chocolate() {

    let a = 10;
    let b = "sam";
    let c = true;
    let d = false;
    let e = undefined;
    let f = null;

  return (
    <div>
        <h1>A: {a} </h1>
        <h1>B: {b} </h1>
        <h1>C: {JSON.stringify(c)} </h1>
        <h1>D: {JSON.stringify(d)} </h1>
        <h1>E: {JSON.stringify(e)} </h1>
        <h1>F: {JSON.stringify(f)} </h1>
        <p>Chocolate</p>
    </div>
  )
}

export default Chocolate
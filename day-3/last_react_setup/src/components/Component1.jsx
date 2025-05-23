function Component1(){
// univerise 1
const a = true;
const b = false;
const c = "samarth";

// univerise 2
    return(
        <div>
            {/* A: {a} */}
            A: {JSON.stringify(a)}
            B: {JSON.stringify(b)}
            C: {c}

        </div>
    )
}

export default Component1;
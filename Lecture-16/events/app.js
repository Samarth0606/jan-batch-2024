// let btn = document.querySelector('button');

// function icecream(){
//     console.log("icecream");
// }
// function momos(){
//     console.log("momos");
// }

// btn.onclick = momos;
// btn.onclick = icecream;

// 1 event = 1task

// --------------------------------------
// red button => 1 event = multiple task 
// 3. addEventListener


function icecream(){
    console.log("icecream");
}
function momos(){
    console.log("momos");
}

let btn = document.querySelector('button');

btn.addEventListener('click' , icecream) // 2
btn.addEventListener('click' , momos) // 2



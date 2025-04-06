const cellElements = document.querySelectorAll('.cell')

for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true})
}

// let circle_turn = true;
let circle_turn = false; //starting class

let winning_combination = [ 
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

function handleClick(e){
    //1. mark the symbol
    let clickedCell = e.target;
    let currentClass = circle_turn ? "circle" : "x";
    clickedCell.classList.add(currentClass)

    // 2. check win
    if( checkWin(currentClass) ){
        document.querySelector('.final-winner').innerHTML = `Winner ${currentClass}`
        document.querySelector('.final-winner').parentElement.classList.add('show')
    }
    // 3. check draw
   if( isDraw() ){
        document.querySelector('.final-winner').innerHTML = `DRAW`
        document.querySelector('.final-winner').parentElement.classList.add('show')
   }
    //4. change turn
    circle_turn = !circle_turn;
}

function checkWin(currentClass){
    return winning_combination.some(function(itemRow){
        return itemRow.every(function(item){
            return cellElements[item].classList.contains(currentClass)
        })
   })
}

function isDraw(){
    //convert nodelist into array
    return [...cellElements].every(function(cell){
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}



function restart(){
    window.location.reload()
}

document.querySelector('#restart-btn').onclick = restart;


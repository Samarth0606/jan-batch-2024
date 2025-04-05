let redBtn = document.querySelector('#red')
let blueBtn = document.querySelector('#blue')
let greebBtn = document.querySelector('#green')
let bodyEl = document.querySelector('body')

redBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "red"
})

blueBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "blue"
})

greebBtn.addEventListener('click' , function(){
    bodyEl.style.backgroundColor = "green"
})
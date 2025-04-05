

// let inpEl = document.querySelector('input');

// inpEl.addEventListener('input' , function(event){
//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.textContext); //❌
//     console.log(event.target.value); //✅
//     console.log(inpEl.value); //✅
// })

// ----------------------------------------------

let inpEl = document.querySelector('input');

inpEl.addEventListener('keydown' , function(e){
    // console.log(e);
    // if(e.which === 13){
    if(e.key === "Enter"){
        console.log(e.target.value);
    }
})



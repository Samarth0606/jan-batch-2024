

let section = document.querySelector('section');


// create a div & add some content in it => section > div

let divEl = document.createElement('div');
let h1El = document.createElement('h1');
divEl.innerHTML = "i am div brother"
h1El.innerHTML = "i am h1 brother"
// console.log(divEl);

// section.appendChild(divEl , h1El)
section.appendChild(h1El, divEl)
section.append(divEl,h1El)

section.prepend(divEl,h1El)


h1El.remove()
section.removeChild(divEl)
section.removeChild(h1El)









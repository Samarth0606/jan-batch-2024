

// selection
// 1. getElementsByTagName
// let heading1 = document.getElementsByTagName('h1') //array -> many
// console.log(heading1[0]);
// console.log(heading1[1]);
// console.log(heading1[2]);
// console.log(heading1[3]);


// manipulation

// heading1[2].style.color = "orange"
// heading1[2].style.backgroundColor = "blue"
// heading1[2].style.fontSize = "100px"

// heading1[0].style.color = "orange"
// heading1[0].style.backgroundColor = "purple"
// heading1[0].style.border = "2px solid black"


// ---------------------------------------------------------------------

// 2. getElementById -> one

// selection
// let samId = document.getElementById('sam'); // one -> first one

// console.log(samId);

// maniuplation (WET)
// samId.style.color = 'orange'
// samId.style.backgroundColor = 'green'
// samId.style.fontSize = '50px'
// ----------
// maniuplation (DRY) -> PTR : SEMICOLON , KABABCASE eg:(SAM-VOHRA)
// samId.style.cssText = `
//         color: orange;
//         background-color: purple;
//         font-size: 50px;
// `


// ---------------------------------------------------------------------

// 2. getElementsByClassName -> Many

// let vohraClasses = document.getElementsByClassName('vohra');
// console.log(vohraClasses);


// WET
// vohraClasses[0].style.cssText = `color:red; font-size:50px;`

// vohraClasses[1].style.cssText = `color:red; font-size:100px;`

// vohraClasses[2].style.cssText = `color:red; font-size:50px;`

//DRY
// for(let item of vohraClasses){
//     item.style.cssText = `color:red; font-size:50px;`
// }


//just for reference

// for(let item of vohraClasses){
//     if(item.innerHTML === "LEARNING DOM 2"){
//         item.style.cssText = `color:red; font-size:50px;`
//     }
// }



// --------------------------------------------------------------------


// 4. querySelector (tag, id, class) -> at one place => one

// selection
// let h1Tag = document.querySelector('h1')
// let h1Id = document.querySelector('#sam')
// let h1Class = document.querySelector('.vohra')

// console.log(h1Tag);
// console.log(h1Id);
// console.log(h1Class);


// mainpulation
// h1Tag.style.color = "orange"
// h1Tag.style.cssText = `color:orange; background-color: purple;`


// --------------------------------------------------------------------

// 5. querySelectorAll => many

let h1Tag = document.querySelectorAll('h1')
let h1Id = document.querySelectorAll('#sam')   //acc to me only
let h1Class = document.querySelectorAll('.vohra')

console.log(h1Tag);
console.log(h1Id);
console.log(h1Class);



















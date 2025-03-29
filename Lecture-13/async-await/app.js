



// function sam(){

// }
// console.log(sam());

// ------------------------------


// function sam(){

// }
// console.log( new sam() );

// // ------------------------------

// always return a promise
// async function sam(){

// }
// console.log(sam());




// ------------------------------

// async function samm(){
    
//     return 100;
// }
// console.log(samm());

// ------------------------------

async function samm(){
    return new Promise((resolve,reject)=>{
        resolve("tata"); reject("bhagg")});
}
console.log(samm());










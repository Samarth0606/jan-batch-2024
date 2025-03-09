

// higher order function
// function a(fn){
//     console.log(x);
//     console.log("i am inside a");
// }

// // callback function
// function b(){
//     console.log("i am inside b");
// }

// a(b)


// ----------------------------------------

// higher order fn
// function outer(){
//     console.log("i am outer");
//     function inner(){
//         console.log("i am inner fn"); 
//     }
//     return inner 
// }
// outer()


// ----------------------------------------

//HIGHER ORDER FUNCTIONS  (ARRAY METHODS)

// let arr = [10,20,30,40,50]
// // forEach -> HOF -> accepts CB fn-> which doesnot returns anything

// let returnedVal = arr.forEach( function(item, index){
//     console.log(item , index);
// } )

// console.log( returnedVal );

// ------------------------------------------
// map
// let arr = [10,20,30,40,50]
// // map -> HOF -> accepts CB fn -> returns an array -> (length will always be the same)
// let returnedArr = arr.map( function(item,index){
//     return item*item
// } )

// console.log(arr);
// console.log(returnedArr);

// ------------------------------------------

// filter
// let arr = [10,20,30,40,50]
// // filter -> HOF -> accepts CB fn -> returns an array -> (length will not be fixed) -> only returns truthy values
// let newlyArr = arr.filter( function(item, index){
//     if(item>30){
//         return true 
//         // return item 
//     } 
// } )

// console.log(arr);
// console.log(newlyArr);


// destructive , non destructive (original array are not changed)

// -------------------------------------------


// let arr = [10,20,30,40,50];


// let resultant = arr.some( function(item,index){
//     if(item%10 === 0){
//         return true
//     }
// } )

// console.log(resultant);


// -------------------------------------------


// let arr = [10,20,30,45,50];


// let resultant = arr.every( function(item,index){
//     if(item%5 === 0){
//         return true
//     }
// } )

// console.log(resultant);


// ---------------------------------------

// Write a function that takes an array of numbers, doubles each value, and then filters out the values greater than 10.

// function sam(arr){
//     let returnedMap = arr.map( function(item){
//         return item*item
//     } ).filter( function(item){
//         if(item>10){ return true }
//     } )

//     console.log(returnedMap);
    
// }

// sam([1,2,3,4,5,6,7,8,9])

// -------------------------------------------------------------------
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// let arr = [1,2,3,4,5,6,7,8,9];
// function evenNum(arrr){
//     let evennumbers = arrr.filter( function(item){
//         if(item%2 === 0){
//             return true
//         }
//     } )
//     console.log(evennumbers);
// }

// evenNum(arr)


// -------------------------------------------------------------------

// let arr = [10,20,30,40];
// push() -> add at the end of array    ->  length of the changed array
// console.log(arr);
// // arr.push(50)
// // arr.push(60)
// let returnedVal = arr.push(60,70,80,90)
// console.log(arr);
// console.log(returnedVal);

// -------------------------------------------------------------------

// let arr = [10,20,30,40];
// // pop()  -> remove from the end of arr ->  the element which is removed

// console.log(arr);
// // arr.pop();
// let returnedVal = arr.pop();
// console.log(arr);
// console.log(returnedVal);



// -------------------------------------------------------------------
// let arr = [10,20,30,40];
// // shift() -> removes from the start of array -> the element which is removed
// let returnedVal = arr.shift()
// console.log(arr);
// console.log(returnedVal);


// -------------------------------------------------------------------
let arr = [10,20,30,40];
// unshift() -> add at the start of array    ->  length of the changed array
let returnedVal = arr.unshift(900,500,400,600,700)
console.log(arr);
console.log(returnedVal);





// " "
// ' '
// ` `
// new String()
// new Array()
// []
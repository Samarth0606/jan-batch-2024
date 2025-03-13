


// function samarth(){

// }
// console.log( samarth() );


// ----------------------------------


// function samarth(){

// }

// console.log( samarth() );
// console.log( new samarth() );

// ----------------------------------

// general
// function samarth(){

// }

// // constructor
// function Samarth(){

// }

// console.log( samarth() );
// console.log( new Samarth() );


// // ----------------------------------


// // constructor -> create objects
// function Samarth(){
//     this.username = "maverick";
//     this.password = 12345;
// }

// let p1 =  new Samarth()  // {} => key : value
// let p2 =  new Samarth()  // {} => key : value

// console.log(p1);
// console.log(p2);

// ----------------------------------

// // constructor -> create objects
// function Samarth(username,password){
//     this.username = username;
//     this.password = password;
// }

// let p1 =  new Samarth("Samarth" , 54321)  // {} => key : value
// let p2 =  new Samarth("Maverick" , 12345)  // {} => key : value

// console.log(p1);
// console.log(p2);


// ----------------------------------

// constructor -> create objects
function Samarth(username,password){
    this.username = username; //properties
    this.password = password; //properties
    this.greet = function(){
        console.log("hello good morning");
    }
}

let p1 =  new Samarth("Samarth" , 54321)  // {} => key : value
let p2 =  new Samarth("Maverick" , 12345)  // {} => key : value


console.log(p1);
console.log(p2);




// constructor

function Sam(username,age,color){
    this.username = username;
    this.umar = age;
    this.color = color;
    this.greet = function(){
        console.log("hello goodmorning")
    }
}
let p1 = new Sam("mav" , 2.7 , "brown");
let p2 = new Sam("sam" , 100 , "black");
console.log(p1); console.log(p2);

// --------------------------------------------
// class
class Sam2{
    constructor(username,age,color){
        this.username = username;
        this.umar = age;
        this.color = color;
    }
    greet(){
        console.log("hello good morning");
    }
}
let p3 = new Sam2("mav" , 2.7 , "brown");
let p4 = new Sam2("sam" , 100 , "black");
console.log(p3); console.log(p4);











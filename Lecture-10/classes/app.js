// class Vohra{
//     constructor(x,y){
//         this.username = x;
//         this.age = y;
//     }
//     hi(){ console.log("i am hi fn") }
// }

// class Maverick{
//     constructor(x,y){
//         this.username = x;
//         this.age = y;
//     }
//     hi(){ console.log("i am hi fn") }
// }

// let p3 = new Vohra("Sam" , 1010)
// let p4 = new Maverick("Mav" , 10)
// console.log(p3); console.log(p4);


// -----------------------------------------------

// class Vohra{
//     constructor(x,y){
//         this.username = x;
//         this.age = y;
//     }
//     hi(){ console.log("i am hi fn") }
// }

// class Maverick extends Vohra{}

// let p3 = new Vohra("Sam" , 1010)
// let p4 = new Maverick("Mav" , 10)
// console.log(p3); console.log(p4);

// // -----------------------------------------------

// class Vohra{
//     constructor(x,y){
//         this.username = x;
//         this.age = y;
//     }
//     hi(){ console.log("i am hi fn") }
//     tata(){ console.log("i am tata") }
// }

// class Maverick extends Vohra{
//     constructor(x,y,z){
//         super(x,y)
//         this.isDog = z
//     }
// }

// let p3 = new Vohra("Sam" , 1010)
// let p4 = new Maverick("Mav" , 10, true)
// console.log(p3); console.log(p4);


//  -----------------------------------------------

class Vohra{
    constructor(x,y){
        this.username = x;
        this.age = y;
    }
    hi(){ console.log("i am hi fn") }
    tata(){ console.log("i am tata") }
}

class Maverick extends Vohra{
    constructor(x,y,z){
        super(x,y)
        this.isDog = z
    }
    hi(){ console.log("i am mav vala hi") }
}

class Sam extends Maverick{
    constructor(x,y,z,a){
        super(x,y,z)
        this.isMentor = a
    }
}

// const p3 = new Vohra("Sam" , 1010)
// const p4 = new Maverick("Mav" , 10, true)
// const p5 = new Sam("blah blha" , 1000, true, false)
// console.log(p3); console.log(p4); console.log(p5);

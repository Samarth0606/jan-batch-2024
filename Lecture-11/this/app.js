
//1. direct calling -> window
// function sam(){
//     console.log(this);
// }
// sam(); //direct calling -> window

// --------------------------------------------------------------------

// 2. object calling -> points to the object inside which our method is written

// const obj = {
//     a: 10,
//     fn:function(){
//         console.log(this); 
//     }
// }

// obj.fn(); //method/object 

// --------------------------------------------------------------------


// function sam(){
//     console.log(this , "1"); // -> window
//     function vohra(){
//         console.log(this , "2"); // -> window
//     }
//     vohra()
// }
// sam()

// --------------------------------------------------------------------

// let abc = {
//     a: 10,
//     fn: function(){
//         console.log(this); //  window , obj
//     }
// }

// abc.fn()

// let ans = abc.fn
// ans()

// --------------------------------------------------------------------

// let abc = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window
//         let sam = function(){
//             console.log(this , "2"); // window
//         }
//         sam()
//     }
// }
// let ans = abc.fn
// ans()


// --------------------------------------------------------------------

// let obj = {
//     a:10,
//     sam:{
//         b: 20,
//         fun: function(){
//             console.log(this , "1"); //sam
//             function vohra(){
//                 console.log(this , "2"); //window
//             }
//             vohra();
//         }
//     }
// }
        
// obj.sam.fun();

// --------------------------------------------------------------------

// 3. constructor function -> newly created object

// function Sam(x,y){
//     this.a = x;
//     this.b = y;
// }

// let p1 = new Sam("10" , "100")
// let p2 = new Sam("20" , "200")

// console.log(p1);
// console.log(p2);

// --------------------------------------------------------------------
// 4. indirect calling (call, bind, apply)
// used to change the reference of this keyword


// let obj = {
//     a: 10,
//     fn: function(x,y,z){
//         console.log(this.a,x,y,z);
//     }
// }

// let obj2 = {
//     a: 50
// }

// obj.fn();
// obj.fn.call(obj2,10,20,30) // accepts ref of new this keyword
// obj.fn.apply(obj2,[100,200,300]) // accepts ref of new this keyword



// bind -> creates a copy of that fn
// let copiedFn = obj.fn.bind(obj2,10,20,30) // accepts ref of new this keyword
// copiedFn()


// -------------------------------

let objjj = {
    naam: "sam",
    fun: function(xyz){
        // console.log(`hello from sam`);
        // console.log(`hello from ${objj.naam}`);
        console.log(`hello from ${this.naam}` , `${xyz}`);
        console.log(`hello from ${this.naam}` , xyz);
    }
}

objjj.fun(10)

// -----------------------------
// let objj = {
//     a: 10
// }
// function sam(){
//     console.log(this.a);  
// }

// sam.call(objj)


// --------------------------------------------------------------------


// 5. arrow function


// function sam(a,b){
//     return a+b
// }

// const sam = (a,b)=>{
//     return a+b
// }

// console.log( sam(10,30) );

// -----------------------------

// function square(a){
//     return a*a;
// }


// way-1
// let square = (a)=>{
//     return a*a;
// }

// way-2
// let square = (a)=> a*a;

// way-3
// let square = a => a*a;


// console.log( square(7) );


// -----------------------------

// let obj = {
//     a: 10,
//     fun: function(){
//         console.log(this , "1"); // obj
//         let arr = ()=>{
//             console.log(this,"2"); // obj
//         }
//         arr();
//     }
// }
// obj.fun(); 


// let obj = {
//     a: 10,
//     fun: ()=>{
//         console.log(this , "1"); // window
//         let arr = ()=>{
//             console.log(this,"2"); // window
//         }
//         arr();
//     }
// }
// obj.fun(); 




// let obj = {
//     a: 10,
//     fun: ()=>{
//         console.log(this , "1"); // window
//         let arr = ()=>{
//             console.log(this,"2"); // window
//         }
//         arr();
//     }
// }
// let ans = obj.fun; 
// ans()


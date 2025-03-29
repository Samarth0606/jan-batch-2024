

// let p1 = new Promise()

// let p1 = new Promise( function(){} )

// let p1 = new Promise( function( x, y ){} )

let p1 = new Promise( function(resolve, reject){
    let data = "10 rupees"
    let err = "aaj bhi gire hue paise utha lete ho kya?"

    resolve(data)
    reject(err)
} )


p1
.then(function(d){
    console.log(d,"then");
})
.catch(function(e){
    console.log(e , "catch");
})
.finally(function(){
    console.log("mai hu finally");
})












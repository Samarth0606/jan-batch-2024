

// selected image -> 4s
// filtered image -> 2s
// captioned image -> 5s
// uploaded image -> 3s

// ------------------------------------

function step1(){
    console.log("please wait i am selecting image...");
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("selected image");
        },4000)
    } )
}
function step2(image){
    console.log(`please wait adding filter to ${image}`);
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("filtered image");
        },2000)
    } )
}
function step3(filter){
    console.log(`please wait adding caption to ${filter}`);
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("captioned image");
            // reject("hatt");
        },5000)
    } )
}
function step4(caption){
    console.log(`please wait uploading the ${caption}`);
    return new Promise( function(resolve,reject){
        setTimeout(function(){
            resolve("finally uploaded");
        },3000)
    } )
}


step1()
.then( function(image){
    console.log(image);
    return step2(image)
} )
.then( function(filter){
    console.log(filter);
    return step3(filter)
} )
.then( function(caption){
    console.log(caption);
    return step4(caption)
} )
.then( function(uploaded){
    console.log(uploaded);
} )
.catch(function(err){
    console.log("error" , err); 
})





















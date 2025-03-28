
// step1- selecting image 4s
// step2- filtered image 2s
// step3- captioned image 5s 
// step4- upload image 3s

function step1(fn){
    console.log("please wait i am selecting image...");
    setTimeout( function(){
        console.log("selected image"); 
        fn("selected image")
    }, 4000 )
}

function step2(image,fn){
    console.log(`please wait i am applying filter to ${image}...`);
    setTimeout( function(){
        console.log("filtered image"); 
        fn("filtered image")
    }, 2000 )
}
function step3(filter , fn){
    console.log(`please wait i am adding caption to ${filter}...`);
    setTimeout( function(){
        console.log("captioned image"); 
        fn("captioned image")
    }, 5000 )
}

function step4(caption){
    console.log(`please wait i am uploading ${caption}...`);
    setTimeout( function(){
        console.log("image uploaded successfuly"); 
    }, 3000 )
}

step1( function(image){
    step2(image , function(filter){
        step3(filter, function(caption){ 
            step4(caption)
        } )
    } );
} );




















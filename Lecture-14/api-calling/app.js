

// fetch -> webapi -> returns a promise -> partial data -> .json() -> returns promise -> entire data

// let API = "https://api.tvmaze.com/search/shows?q=girls"

// fetch(API)

// 1. fetch & promise
fetch("https://api.tvmaze.com/search/shows?q=girls")
.then( function(res){
    // console.log(res,"then"); //partial data
    return res.json()
} )
.then( function(data){
    console.log(data , "entire data"); //entire data
} )
.catch( function(err){
    console.log(err,"catch");
} )

// ---------------------------------------------------------

// 2. fetch & async-await
// let callApi = async()=>{
async function callApi(){
    let res = await fetch("https://api.tvmaze.com/search/shows?q=girls") //partial data
    let data = await res.json()
    // console.log(data , "entire data 2");
    return data
}
callApi().then(function(d){
    console.log(d);
})


// axios -> returns promise -> entire data only









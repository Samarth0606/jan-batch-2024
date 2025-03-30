
// axios with promise

// axios.get("https://api.tvmaze.com/search/shows?q=girls")
// .then(function(res){
//     console.log(res.data); // entire data
// })
// .catch(function(err){
//     console.log(err);
// })


// ------------------------------------------------------------------------

// axios with async-await
async function callApiAxios() {
   let data = await axios.get("https://api.tvmaze.com/search/shows?q=girls")
    return data
}
// let futureUrl = null;

// let returnedData = callApiAxios().then(function(res){
//     for(let item of res.data){
//         console.log(item.show.image.medium);
//     }
    
// })
// console.log(returnedData);


let returnedData = callApiAxios().then(function(res){
    for(let item of res.data){
        // console.log(item.image.medium); 
        console.log(item?.show?.image?.medium); //optional chaining (production)
    }
})










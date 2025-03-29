

// async function callApi(){
//     console.log(1);
//     let data =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let resp = await data.json();
//     console.log(resp);
// }

// callApi();

// console.log(2);


// ----------------------------------------


async function callApi(){
    console.log(1);
    console.log(2);
    let data =  await fetch("https://api.tvmaze.com/search/shows?q=girls")
    console.log(data);
    let resp = await data.json();
    console.log(3);
    console.log(resp);
    console.log(4);
}

callApi();

async function callApi2(){
    console.log(10);
    console.log(20);
    let data2 =  await fetch("https://api.tvmaze.com/search/shows?q=superman")
    console.log(data2);
    let resp2 = await data2.json();
    console.log(30);
    console.log(resp2);
    console.log(40);
}

callApi2();






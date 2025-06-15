// create server
// const express = require('express'); //FUNCTION
// import express from 'express'; 
// const app = express(); //OBJECT -> INSTANCE OF YOUR APPLICATION


// const PORT = 8000;
// app.listen(PORT,()=>{
//     console.log(`Server Connected at Port : ${PORT}`);
// })


// ------------------------------------

import express from 'express'; 
const app = express();

// api's
app.post( "/samarth"  , (req,res)=>{ 
    res.send("<h1>bye bye</h1>")
} )

app.get( "/samarth"  , (req,res)=>{ 
    res.send("<h1>hello from samarth</h1>")
} )

app.get( "/vohra"  , (req,res)=>{ 
    res.send("hello from vohra")
} )

const PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server Connected at Port : ${PORT}`);
})




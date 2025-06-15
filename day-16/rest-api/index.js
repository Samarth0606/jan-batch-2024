import express from  "express";
const app =  express();

let password = "samarthh";
//middleware
app.use( '/samarth', (req,res,next)=>{
    if(req.query.age >=18){
        next()
    }else{
        return res.send("sorry not allowed")
    }
} )

app.get('/' , (req,res)=>{
    console.log("you hit root route");
    return res.send("<h1>Welcome to Root Route</h1>")
})
app.get('/samarth' , (req,res)=>{
    console.log("you hit samarth route");
    return res.send("<h1>Welcome to Samarth Route</h1>")
})

const PORT = 8000
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})
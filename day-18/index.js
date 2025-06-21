import express from "express";
const app = express(); //entire application
import mongoose from 'mongoose';
import {restaurantRoutes} from './routes/restaurant.routes.js'

// mongoose.connect('mongodb://127.0.0.1:27017/maverick') //own localhost/machine
mongoose.connect('mongodb+srv://samarthvohraindia:jzCGJhI6j6MRHtQJ@cluster0.tvis7av.mongodb.net/') //cloud atlas
.then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY");
})
.catch((err)=>{
    console.log("DB NOT CONNECTED" , err);
})

app.get('/' , (req,res)=>{
    console.log("welcome");
    
    res.send("welcome")
})

restaurantRoutes(app)


const PORT = 5050;
app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
})


// samarthvohraindia
// jzCGJhI6j6MRHtQJ
// mongodb+srv://samarthvohraindia:jzCGJhI6j6MRHtQJ@cluster0.tvis7av.mongodb.net/
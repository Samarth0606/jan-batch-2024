import express from "express";
const app = express();
import mongoose from 'mongoose';


// mongoose.connect('mongodb://127.0.0.1:27017/maverick') //own localhost/machine
mongoose.connect('mongodb+srv://samarthvohraindia:jzCGJhI6j6MRHtQJ@cluster0.tvis7av.mongodb.net/') //cloud atlas
.then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY");
})
.catch((err)=>{
    console.log("DB NOT CONNECTED" , err);
})





const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`server is running at port : ${PORT}`);
})


// samarthvohraindia
// jzCGJhI6j6MRHtQJ
// mongodb+srv://samarthvohraindia:jzCGJhI6j6MRHtQJ@cluster0.tvis7av.mongodb.net/
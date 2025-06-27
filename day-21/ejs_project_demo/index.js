import express  from 'express';
const app = express();
import mongoose from 'mongoose';
import BlogModel from './models/Blog.models.js';


mongoose.connect('mongodb://127.0.0.1:27017/janEjs')
.then(()=>{ console.log("DB connected") })
.catch((err)=>{ console.log("DB failed" , err) })

// app.set('views' , )
app.set('view engine' , 'ejs'); //compulsary(defaults)

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/' , (req,res)=>{
    // res.send("welcome to root route")// data
    res.render('home') //page
})


app.get('/blogs' , async(req,res)=>{
    let allBlogs = await BlogModel.find()
    res.render('index' , {allBlogs})
})

app.get('/blog/new' , (req,res)=>{
    res.render('new')
})

app.post('/blogs' , async (req,res)=>{
   let {title,content} = req.body;
//    let newBlog = await BlogModel.create(req.body);
   let newBlog = await BlogModel.create({title,content});
   res.redirect('/blogs') //get request
})

app.get('/blogs/:idd', async(req,res)=>{
    let {idd} = req.params;
    let particularBlog = await BlogModel.findById(idd);
    res.render('show', {particularBlog})
})

app.listen(8080 , ()=>{
    console.log("server connected at port: 8080");
})
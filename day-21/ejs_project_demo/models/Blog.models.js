import mongoose from 'mongoose';

const blogSchema  = new mongoose.Schema({
    title: String,
    content:String
})

const BlogModel = mongoose.model('Blog' , blogSchema)

export default BlogModel;


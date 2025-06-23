import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: String,
    password: String,
    email: {
        type:String,
        unique:true
    }, 
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
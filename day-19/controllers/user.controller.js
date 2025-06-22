import UserModel from "../models/User.model.js"
import bcrypt from "bcrypt";

export async function register(req,res){
    try{
        let {fullName,email,password} = req.body;
        UserModel.findOne({email}).then((data)=>{
            if(data){
                return res.status(400).json({error: "User already exist"})
            }
            else{
                let newpassword = bcrypt.hashSync(password, 10);
                UserModel.create({fullName,email,password:newpassword})
                .then((data)=>{
                    console.log(data , "data");
                    return res.send(data);
                })
            }
        })
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}
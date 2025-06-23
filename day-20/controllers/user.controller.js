import UserModel from "../models/User.model.js"
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export function register(req,res){
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

export function login(req,res){
    try{
        let {email,password} = req.body;
        UserModel.findOne({email}).then((data)=>{
            if(!data){
                return res.status(404).json({message: "User is not registered"})
            }

            let validPassword = bcrypt.compareSync(password, data.password);
            if(!validPassword){
                return res.status(404).json({message: "Invalid password"})
            }

            const token = jwt.sign({id:data._id}, 'secretKey' , {expiresIn: "1m"});
            // console.log(token , "token");
            

            return res.status(200).send({
                user:{
                    email: data.email,
                    fullName: data.fullName,
                    password: data.password
                },
                accessToken: token
            })
        })
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}

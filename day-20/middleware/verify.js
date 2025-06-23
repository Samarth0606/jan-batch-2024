import jwt from 'jsonwebtoken';
import UserModel from '../models/User.model.js';

export function verifyToken(req,res,next){
    if(
        req.headers && 
        req.headers.authorization && 
        req.headers.authorization.split(" ")[0] === "JWT"
    ){
        jwt.verify(
            req.headers.authorization.split(" ")[1], 'secretKey',
            (err,verfiedToken)=>{
                if(err){
                    return res.status(403).json({message:"Invalid token"})
                }
                // console.log(verfiedToken.id , "tpken verifiged");
                UserModel.findById(verfiedToken.id)
                .then((user)=>{
                    console.log(user,"user");
                    next()
                })
                .catch((err)=> res.status(500).json({message:err.message}))
                
            });
    }
}


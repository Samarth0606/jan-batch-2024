import jwt from 'jsonwebtoken';
import UserModel from '../models/User.model.js';

export function verifyToken(req,res,next){
    if(
        req.headers && 
        req.headers.authorization && 
        req.headers.authorization.split(" ")[0] === "JWT"
    ){
        console.log("bc");
        console.log(req.headers.authorization);
        
        jwt.verify(
            req.headers.authorization.split(" ")[1],'secretKey',
            (err,verfiedToken)=>{
                console.log("jwt ke andar 1");
                console.log(err);
                console.log(verfiedToken);
                
                if(err){
                    return res.status(403).json({message:"Invalid token"})
                }
                // console.log(verfiedToken.id , "tpken verifiged");
                UserModel.findById(verfiedToken.id)
                .then((user)=>{
                    console.log(user,"user");
                    req.user = user;
                    next()
                })
                .catch((err)=> res.status(500).json({message:err.message}))
                
            });
    }
}


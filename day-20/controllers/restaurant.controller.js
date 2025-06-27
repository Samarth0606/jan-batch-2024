import RestaurantModel from "../models/Restaurant.model.js";


export async function createRestaurant(req,res){
    try{
        // console.log(req.body , "req");
        // let {name,rating,cuisines,deliveryTime,imgUrl} = req.body;
        const newRestaurant = await RestaurantModel.create(req.body);
        return res.status(201).json({"newRestaurant" : newRestaurant})
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}

export async function fetchRestaurant(req,res){
    try{
        const data = await RestaurantModel.find({});
        console.log(data , "data");
        console.log(req.user , "req.user");
        
        // res.status(200).send("data we got")
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}

export async function updateRestaurant(req,res){
    try{
        const {id} = req.params;
        // let  {name,rating,cuisines,deliveryTime,imgUrl} = req.body;
        let updatedResturant = await RestaurantModel.findByIdAndUpdate(id,req.body , {new:true})  
        res.status(200).json({"message": "Restaurant Updated successfully"}) 
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}

export async function deleteteRestaurant(req,res){
    try{
        const {id} = req.params;
        // let  {name,rating,cuisines,deliveryTime,imgUrl} = req.body;
        await RestaurantModel.findByIdAndDelete(id);
        res.status(200).json({"message": "Restaurant Deleted successfully"}) 
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}
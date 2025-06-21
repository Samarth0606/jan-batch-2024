import RestaurantModel from "../models/Restaurant.model.js";


export function createRestaurant(req,res){

    // RestaurantModel.create()
}

export async function fetchRestaurant(req,res){
    try{
        const data = await RestaurantModel.find();
        // res.status(200).send("data we got")
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({error: err.message})
    }
}

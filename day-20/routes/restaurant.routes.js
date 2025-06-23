import { createRestaurant, deleteteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verify.js";


export function restaurantRoutes(app){
    app.get('/api/restaurants', verifyToken , fetchRestaurant) ,
    app.post('/api/restaurant' , createRestaurant) ,
    app.put('/api/restaurant/:id' , updateRestaurant ) ,
    app.delete('/api/restaurant/:id' , deleteteRestaurant ) 
}















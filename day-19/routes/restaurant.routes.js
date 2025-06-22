import { createRestaurant, deleteteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";


export function restaurantRoutes(app){
    app.get('/api/restaurants' , fetchRestaurant) ,
    app.post('/api/restaurant' , createRestaurant) ,
    app.put('/api/restaurant/:id' , updateRestaurant ) ,
    app.delete('/api/restaurant/:id' , deleteteRestaurant ) 
}















import { createRestaurant, fetchRestaurant } from "../controllers/restaurant.controller.js";


export function restaurantRoutes(app){
    app.get('/api/restaurants' , fetchRestaurant) ,
    app.post('/api/restaurant' , createRestaurant)
}















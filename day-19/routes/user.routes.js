import { register } from "../controllers/user.controller.js";


export function userRoutes(app){
    app.post('/api/register' , register)
}















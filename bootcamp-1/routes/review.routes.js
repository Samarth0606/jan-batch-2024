import { createReview } from "../controllers/review.controller.js";


export default function reviewRoutes(app){
    app.post('/products/:id/review' , createReview)
}







import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
    rating:{
        type: Number,
        min: 0,
        max: 5
    },
    comment:{
        type: String
    }
})

const ReviewModel = mongoose.model('Review' , reviewSchema);

export default ReviewModel;










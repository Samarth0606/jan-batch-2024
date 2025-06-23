import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: String, 
    cuisines: String,
    deliveryTime: String 
})

const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);

export default RestaurantModel;




// ------ dummy way ------------
// const restaurantSchema = new mongoose.Schema({
//     name: {
//         type:String,
//         required: true
//     },
//     imageUrl: {
//         type:String
//     },
//     rating: {
//         type: Number,
//         min: 0,
//         max: 5
//     }, 
//     cuisines: String,
//     deliveryTime: String 
// })
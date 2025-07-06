import ProductModel from "../models/Product.model.js";
import ReviewModel from "../models/Review.model.js"

export async function createReview(req,res){
    let {id} = req.params;
    let foundProduct = await ProductModel.findById(id);
    let {rating,comment} = req.body;
    const review = await ReviewModel.create({rating,comment})

    foundProduct.reviews.push(review); //automatically id hi jaegi
    await foundProduct.save();
    res.redirect(`/products/${id}`)
}
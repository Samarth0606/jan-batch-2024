import ProductModel from "../models/Product.model.js";


export async function allProducts(req,res){
    const allProduct = await ProductModel.find();
    res.render('product' , {allProduct})
}

export function newForm(req,res){
    res.render('new')
}

export async function createProduct(req,res){
    // console.log(req.body , "req.body");
    const createdProduct = await ProductModel.create(req.body);
    res.redirect('/products');
}   

export async function showProduct(req,res){
    let {id} = req.params;
    // let pp = await ProductModel.findById(id);
    let pp = await ProductModel.findById(id).populate('reviews');
    console.log(pp , "pp");
    res.render('show' , {pp})
}


import { allProducts, createProduct, newForm, showProduct } from "../controllers/product.controller.js";


export default function productRoutes(app){
    app.get('/products' , allProducts),
    app.get('/new' , newForm)
    app.post('/products' , createProduct),
    app.get('/products/:id' , showProduct)
}






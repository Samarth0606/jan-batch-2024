import express  from 'express'
const app = express();
import mongoose from 'mongoose'
import productRoutes from './routes/product.routes.js'
import reviewRoutes from './routes/review.routes.js'

mongoose.connect('mongodb://127.0.0.1:27017/bottle')
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((err)=>{
    console.log("DB failed" , err);
})

app.set('view engine' , 'ejs')
app.use(express.urlencoded({ extended: true }))

productRoutes(app);
reviewRoutes(app);

app.listen(8080 , ()=>{
    console.log('server connected at port: 8080'); 
})
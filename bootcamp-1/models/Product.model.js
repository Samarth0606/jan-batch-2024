
import mongoose from 'mongoose' ;

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    imgUrl:{
        type: String
    },
    desc:{
        type: String
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

const ProductModel = mongoose.model('Product' , productSchema);

export default ProductModel;










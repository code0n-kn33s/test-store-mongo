import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
    "id": { type: String, index: true },
    "title": String,
    "price": Number,
    "quantity": Number
});

export default mongoose.model('Products', ProductsSchema)
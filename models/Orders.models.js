import mongoose from 'mongoose';
import Products from './Products.models.js';

const OrdersSchema = new mongoose.Schema({
    "id": { type: String, index: true },
    "profile_id": { type: String, index: true },
    "products": [{
        "product_id": { type: String, index: true, ref: 'Product' },
        "quantity": Number
    }]
});

OrdersSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('products')) {
        for (let item of this.products) {
            const product = await Products.findById(item.product_id);

            if (!product || product.quantity < item.quantity) {
                throw new Error(`Вы пытаетесь превысить кол-во на складе, доступно : ${product.quantity}` );
            }
            product.quantity -= item.quantity;
            await product.save();
        }
    }
    next();
});

OrdersSchema.pre('findOneAndUpdate', async function(next) {
    const updatedOrderData = this.getUpdate();
    const currentOrder = await OrdersModel.findById(this._conditions._id);

    for (let item of currentOrder.products) {
        const matchingNewProduct = updatedOrderData.products.find(p => p.product_id.toString() === item.product_id.toString());

        if (!matchingNewProduct) {
            const product = await Products.findById(item.product_id);
            product.quantity += item.quantity;
            await product.save();
            continue;
        }

        if (matchingNewProduct.quantity !== item.quantity) {
            const difference = item.quantity - matchingNewProduct.quantity;
            const product = await Products.findById(item.product_id);
            product.quantity += difference;
            await product.save();
        }
    }

    for (let item of updatedOrderData.products) {
        const matchingCurrentProduct = currentOrder.products.find(p => p.product_id.toString() === item.product_id.toString());

        if (!matchingCurrentProduct) {
            const product = await Products.findById(item.product_id);
            if (!product || product.quantity < item.quantity) {
                throw new Error(`Вы пытаетесь превысить кол-во на складе, доступно : ${product.quantity}`);
            }
            product.quantity -= item.quantity;
            await product.save();
        }
    }

    next();
});

OrdersSchema.post('remove', async function(doc) {
    for (let item of doc.products) {
        const product = await Products.findById(item.product_id);
        product.quantity += item.quantity;
        await product.save();
    }
});

const OrdersModel = mongoose.model('Orders', OrdersSchema);

export default OrdersModel;
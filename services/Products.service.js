import Products from "../models/Products.models.js";

class ProductsService {
    async create(data) {
        const createdOne = await Products.create({...data});
        return createdOne;
    }

    async getAll() {
        const findedAll = await Products.find();
        return findedAll;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const findedOne = await Products.findById(id);
        return findedOne;
    }

    async edit(id, data) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const updatedOne = await Products.findByIdAndUpdate(id, data)
        return updatedOne;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const deletedOne = await Products.findByIdAndDelete(id);
        return deletedOne;
    }
}


export default new ProductsService();

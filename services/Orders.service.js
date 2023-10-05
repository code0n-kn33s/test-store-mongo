import Orders from "../models/Orders.models.js";

class OrdersService {
    async create(data) {
        const createdOne = await Orders.create({...data});
        return createdOne;
    }

    async getAll() {
        const findedAll = await Orders.find();
        return findedAll;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const findedOne = await Orders.findById(id);
        return findedOne;
    }

    async edit(id, data) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const updatedOne = await Orders.findByIdAndUpdate(id, data, { new: true });
        return updatedOne;
    }



    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }

        const deletedOne = await Orders.findById(id);
        await deletedOne.remove();

        return deletedOne;
    }
}


export default new OrdersService();

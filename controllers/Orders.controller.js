import OrdersService from "../services/Orders.service.js";

class OrdersController {
    async create(req, res) {
        try {
            const createOne = await OrdersService.create(req.body)

            res.json(createOne)
        } catch (e) {

            console.log('ERROR response :>> ', e);
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const findAll = await OrdersService.getAll();
            return res.json(findAll);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const findOne = await OrdersService.getOne(req.params.id)
            return res.json(findOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async edit(req, res) {
        try {
            const editOne = await OrdersService.edit(req.params.id, req.body);
            return res.json(editOne);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deleteOne = await OrdersService.delete(req.params.id);
            return res.json(deleteOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new OrdersController();

import ProductsService from "../services/Products.service.js";

class ProductsController {
    async create(req, res) {
        try {
            const createOne = await ProductsService.create(req.body)
            res.json(createOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const findAll = await ProductsService.getAll();
            return res.json(findAll);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const findOne = await ProductsService.getOne(req.params.id)
            return res.json(findOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async edit(req, res) {
        try {
            const editOne = await ProductsService.edit(req.params.id, req.body);
            return res.json(editOne);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deleteOne = await ProductsService.delete(req.params.id);
            return res.json(deleteOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ProductsController();

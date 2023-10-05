import ProfilesService from "../services/Profiles.service.js";

class ProfilesController {
    async create(req, res) {
        try {
            const createOne = await ProfilesService.create(req.body)
            res.json(createOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const findAll = await ProfilesService.getAll();
            return res.json(findAll);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const findOne = await ProfilesService.getOne(req.params.id)
            return res.json(findOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async edit(req, res) {
        try {
            const editOne = await ProfilesService.edit(req.params.id, req.body);
            return res.json(editOne);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deleteOne = await ProfilesService.delete(req.params.id);
            return res.json(deleteOne)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new ProfilesController();

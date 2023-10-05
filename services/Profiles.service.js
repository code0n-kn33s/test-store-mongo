import Profiles from "../models/Profiles.models.js";

class ProfilesService {
    async create(data) {
        const createdOne = await Profiles.create({...data});
        return createdOne;
    }

    async getAll() {
        const findedAll = await Profiles.find();
        return findedAll;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const findedOne = await Profiles.findById(id);
        return findedOne;
    }

    async edit(id, data) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const updatedOne = await Profiles.findByIdAndUpdate(id, data)
        return updatedOne;
    }

    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const deletedOne = await Profiles.findByIdAndDelete(id);
        return deletedOne;
    }
}


export default new ProfilesService();

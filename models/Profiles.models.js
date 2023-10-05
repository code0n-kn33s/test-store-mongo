import mongoose from 'mongoose';

const ProfilesSchema = new mongoose.Schema({
    "id": { type: String, index: true },
    "first_name": String,
    "last_name": String,
    "email": { type: String, index: true }
});

export default mongoose.model('Profiles', ProfilesSchema)
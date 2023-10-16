import { model, Schema as _Schema } from 'mongoose';

const Schema = _Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'owner'],
        required: true
    }
});

export default model('User', userSchema);

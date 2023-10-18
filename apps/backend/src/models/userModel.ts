import { model, Schema, Document } from 'mongoose';

interface IUser extends Document {
    email: string;
    password: string;
    role: 'user' | 'owner';
}

const userSchema = new Schema<IUser>({
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

export default model<IUser>('User', userSchema);

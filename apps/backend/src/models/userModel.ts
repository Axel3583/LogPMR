import { model, Document } from 'mongoose';
import mongoose from 'mongoose';

interface IUser extends Document {
  email: string;
  password: string;
  role: 'user' | 'owner';
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'owner'],
    required: true,
    default: "user"
  },
});

export default model<IUser>('User', userSchema);

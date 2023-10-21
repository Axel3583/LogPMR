import User from '../models/userModel'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

const userController = {
    
    register: async (req: Request, res: Response): Promise<any> => {
        const { email, password, role } = req.body;
        const searchCondition = { email };
        try {
            
            const existingUser = await User.findOne({ searchCondition });
            if (existingUser) {
                return res.status(400).json({ message: "Email already registered." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const newUser = new User({ email, password: hashedPassword, role });
            await newUser.save();

            res.status(201).json({ message: "User registered successfully." });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    login: async (req: Request, res: Response): Promise<any> => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "Email not found." });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(400).json({ message: "Invalid password." });
            }

            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: "1h" });

            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default userController;


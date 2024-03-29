import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    userData?: jwt.JwtPayload;
}

export default function (req: CustomRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(403).json({ message: "Authentication failed. No token provided." });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string) as jwt.JwtPayload;
        req.userData = decodedToken;

        next();
    } catch (error) {
        res.status(401).json({ message: "Authentication failed." });
    }
}
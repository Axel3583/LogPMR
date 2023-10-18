import { Express } from 'express';
import auth from '../middleware/auth';
import userController from '../controllers/userController';

export default (server: Express): void => {
  /**
   * @swagger
   * /register:
   *   post:
   *     summary: User registration
   *     tags:
   *       - Users
   *     description: Register a new user with an email and password.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 description: The user's email address.
   *                 example: user@example.com
   *               password:
   *                 type: string
   *                 description: The user's password.
   *                 example: securepassword123
   *     responses:
   *       200:
   *         description: Successfully registered
   *       400:
   *         description: Bad request, e.g. missing or invalid fields
   *       409:
   *         description: Conflict, e.g. email already exists
   */
  server.post('/register', userController.register);

  /**
   * @swagger
   * /login:
   *   post:
   *     summary: User login
   *     tags:
   *       - Users
   *     description: Login an existing user with their email and password.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 description: The user's email address.
   *                 example: user@example.com
   *               password:
   *                 type: string
   *                 description: The user's password.
   *                 example: securepassword123
   *     responses:
   *       200:
   *         description: Successfully logged in
   *       400:
   *         description: Bad request, e.g. missing or invalid fields
   *       401:
   *         description: Unauthorized, e.g. incorrect email or password
   */
  server.post('/login', userController.login);

  /**
   * @swagger
   * /register/owner:
   *   post:
   *     summary: Owner registration
   *     tags:
   *       - Owner
   *     description: Register a new owner with an email and password.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 description: The owner's email address.
   *                 example: user@example.com
   *               password:
   *                 type: string
   *                 description: The owner's password.
   *                 example: securepassword123
   *     responses:
   *       200:
   *         description: Successfully registered
   *       400:
   *         description: Bad request, e.g. missing or invalid fields
   *       409:
   *         description: Conflict, e.g. email already exists
   */
  server.post('/register/owner', auth, userController.register);

  /**
   * @swagger
   * /login/owner:
   *   post:
   *     summary: Owner login
   *     tags:
   *       - Owner
   *     description: Login an existing owner with their email and password.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 description: The owner's email address.
   *                 example: user@example.com
   *               password:
   *                 type: string
   *                 description: The owner's password.
   *                 example: securepassword123
   *     responses:
   *       200:
   *         description: Successfully logged in
   *       400:
   *         description: Bad request, e.g. missing or invalid fields
   *       401:
   *         description: Unauthorized, e.g. incorrect email or password
   */
  server.post('/login/owner', auth, userController.login);
};

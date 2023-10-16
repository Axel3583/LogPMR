const auth = require("../middleware/auth");

module.exports = (server) => {
  const userController = require("../controllers/userController");

  /**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - Users
 *     description: Register a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully registered
 */
  server.post("/register", userController.register); 
  /**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users
 *     description: Login a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 */
  server.post("/login", userController.login); 
  /**
 * @swagger
 * /register/owner:
 *   post:
 *     tags:
 *       - Owners
 *     description: Register a new owner
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Owner object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully registered
 */
  server.post("/register/owner", auth, userController.register);;
  /**
 * @swagger
 * /login/owner:
 *   post:
 *     tags:
 *       - Owners
 *     description: Login an owner
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Owner object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 */
  server.post("/login/owner", auth, userController.login);
  
};

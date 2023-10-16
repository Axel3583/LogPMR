module.exports = (server) => {
  const HomeController = require("../controllers/homeController");

  /**
   * @swagger
   * /home:
   *   post:
   *     tags:
   *       - Homes
   *     description: Create a new home listing
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: Home object
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             emplacement:
   *               type: string
   *             accessibilite:
   *               type: array
   *             description:
   *               type: string
   *     responses:
   *       200:
   *         description: Successfully created
   */
  server.post("/home", HomeController.createHome);

  /**
   * @swagger
   * /home/all:
   *   get:
   *     tags:
   *       - Homes
   *     description: Retrieve all home listings
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Successfully retrieved
   */
  server.get("/home/all", HomeController.getAllHomes);

  /**
   * @swagger
   * /home/{id}:
   *   delete:
   *     tags:
   *       - Homes
   *     description: Delete a specific home listing by ID
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Home ID
   *         in: path
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: Successfully deleted
   */
  server.delete("/home/:id", HomeController.getHomeById);

  /**
   * @swagger
   * /home/{id}:
   *   put:
   *     tags:
   *       - Homes
   *     description: Update a specific home listing by ID
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: id
   *         description: Home ID
   *         in: path
   *         required: true
   *         type: string
   *       - name: body
   *         description: Home object
   *         in: body
   *         required: true
   *         schema:
   *           type: object
   *           properties:
   *             emplacement:
   *               type: string
   *             accessibilite:
   *               type: array
   *             description:
   *               type: string
   *     responses:
   *       200:
   *         description: Successfully updated
   */
  server.put("/home/:id", HomeController.updateHome);
};

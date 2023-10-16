// Exportation d'un module de gestion des routes pour les tâches
module.exports = (server) => {
    const HomeController = require("../controllers/homeController"); // Importation du contrôleur de tâches

    // Définition des routes pour les tâches
    server.post("/home", HomeController.createHome); // Route pour créer une nouvelle annonce logement (HTTP POST)
    server.get("/home/all", HomeController.getAllHomes); // Route pour obtenir tous les logements (HTTP GET)
    server.delete("/home/:id", HomeController.getHomeById); // Route pour supprimer (HTTP DELETE)
    server.put("/home/:id", HomeController.updateHome);
}
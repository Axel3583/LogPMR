// Exportation d'un module de gestion des routes pour les tâches
export default (server) => {
  const userController = require("../controllers/userController"); // Importation du contrôleur des user

  // Définition des routes pour les utilisateurs
  server.post("/register", userController.register); // Route pour créer une nouvelle utilisateur (HTTP POST)
  server.post("/login", userController.login); // Route pour créer auth l'user (HTTP POST)
};

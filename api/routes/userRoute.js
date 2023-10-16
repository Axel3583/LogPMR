import auth from "../middleware/auth";

// Exportation d'un module de gestion des routes pour les utilisateurs
export default (server) => {
  const userController = require("../controllers/userController"); // Importation du contrôleur des user

  // Définition des routes pour les utilisateurs
  server.post("/register", userController.register); // Route pour créer une nouvelle utilisateur (HTTP POST)
  server.post("/login", userController.login); // Route pour créer auth l'user (HTTP POST)

  // Définition des routes pour les propriétaires
  server.post("/register/owner", auth, userController.register);
  server.post("/login/owner", auth, userController.login)
  
};

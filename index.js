// Importation des modules nécessaires
const express = require("express"); // Framework web pour Node.js
const helmet = require("helmet"); // Middleware de sécurité pour Express
const cors = require("cors"); // Middleware de gestion des CORS (Cross-Origin Resource Sharing)
const dotenv = require("dotenv"); // Chargement des variables d'environnement
const mongoose = require("mongoose"); // ODM (Object Data Modeling) pour MongoDB

dotenv.config(); // Charger les variables d'environnement

const hostname = '0.0.0.0'; // L'adresse IP sur laquelle le serveur écoutera
const port = 4000; // Le port sur lequel le serveur écoutera

const server = express(); // Création de l'instance du serveur Express

// Connexion à la base de données MongoDB en utilisant l'URI provenant des variables d'environnement
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB.'); // Connexion réussie à MongoDB
  })
  .catch(err => {
    console.error('MongoDB connection error:', err); // Erreur de connexion à MongoDB
    process.exit(1); // Quitter le processus en cas d'erreur de connexion
  });

server.use(express.urlencoded({ extended: true })); // Middleware pour gérer les données encodées dans les requêtes
server.use(express.json()); // Middleware pour gérer les données JSON dans les requêtes
server.use(helmet()); // Middleware Helmet pour renforcer la sécurité du serveur
server.use(cors()); // Middleware CORS pour gérer les autorisations d'accès depuis différents domaines

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`); // Démarrage du serveur Express sur l'adresse et le port spécifiés
});
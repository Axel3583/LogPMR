const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "REST API DOCS",
            version: "1.0.0",
            description: "Une documentation complète pour l'API du projet Logpmr.",
            contact: {
                name: "Équipe de développement",
                url: "https://logpmr.hp",
                email: "support@logpmr.hp"
            },
            termsOfService: "https://logpmr.hp/terms",
            license: {
                name: "MDS",
                url: "https://logpmr.hp/license"
            }
        },
        servers: [
            {
                url: "http://localhost:3000/api/v1",
                description: "Serveur de développement local"
            },
            {
                url: "https://logpmr.hp/v1",
                description: "Serveur de production"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    description: "Pour utiliser cette méthode, insérez le mot 'Bearer' suivi d'un espace et de votre token JWT."
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    apis: ['./apps/backend/src/routes/*.ts', './apps/backend/src/models/*.ts'],
};


const swaggerSpecDocumentation = swaggerDocument(options);

function swaggerDocs(server, port) {
    server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecDocumentation));
    server.get('/docs.json', (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpecDocumentation);
    });

    console.log(`Docs available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;

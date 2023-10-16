const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-jsdoc');

const option = {
    definition: {
      info: {
        title: "REST API DOCS"
      },
      component: {
        schemaSecurity: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT"
          }
        }
      },
      security: [{
        bearerAuth: []
      }]
    },
    apis: ['./api/routes/*.js']
  }

const swaggerSpecDocumentation = swaggerDocument(option)

 function swaggerDocs (server, port){
    server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecDocumentation))
    server.get('docs.json', (req, res) => {
         req.headers("Content-Type", "application/json")
         res.send(swaggerSpecDocumentation)
    })

    console.log(`Docs available at http://localhost:${port}/docs`)
}

module.exports = swaggerDocs;
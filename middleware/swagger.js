import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { notaSchemas } from "./swagger.schemas.js";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Notas API",
    version: "1.0.0",
    description: "API para gerenciamento de notas pessoais",
    contact: {
      name: "API Support",
      email: "support@notasapi.com",
    },
  },
  servers: [
    {
      url: "/api",
      description: "Servidor de desenvolvimento",
    },
  ],
  components: {
    schemas: notaSchemas,
  },
};

const options = {
  swaggerDefinition,
  apis: ["./middleware/swagger.docs.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };

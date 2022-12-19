const express = require("express");
const controllers = require("../app/controllers");
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const apiRouter = express.Router();

// ================================= Swagger UI ==============================

apiRouter.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// ===========================================================================

apiRouter.post("/casebase-penentu-hama", controllers.penentuHama.penentuHama);
apiRouter.post(
  "/casebase-penentu-pestisida",
  controllers.penentuPestisida.penentuPestisida
);

module.exports = apiRouter;

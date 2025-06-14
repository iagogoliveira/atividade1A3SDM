const produtoController = require("../controllers/produtoController");

module.exports = (server) => {
  server.get("/produtos", produtoController.getAll);
  server.get("/produtos/:id", produtoController.getById);
  server.post("/produtos", produtoController.create);
  server.put("/produtos/:id", produtoController.update);
  server.patch("/produtos/:id", produtoController.partialUpdate);
  server.del("/produtos/:id", produtoController.remove);
};

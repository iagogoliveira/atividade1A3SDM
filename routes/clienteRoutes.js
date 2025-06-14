const clienteController = require("../controllers/clienteController");

module.exports = (server) => {
  server.get("/clientes", clienteController.getAll);
  server.get("/clientes/:id", clienteController.getById);
  server.post("/clientes", clienteController.create);
  server.put("/clientes/:id", clienteController.update);
  server.patch("/clientes/:id", clienteController.partialUpdate);
  server.del("/clientes/:id", clienteController.remove);
};

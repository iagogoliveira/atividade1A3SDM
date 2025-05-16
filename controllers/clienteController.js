const errors = require("restify-errors");
const ClienteService = require("../services/clienteService");

const ClienteController = {
  getAll: (req, res, next) => {
    ClienteService.findAll()
      .then(clientes => {
        res.send(clientes);
        next();
      })
      .catch(err => next(new errors.InternalServerError(err.message)));
  },

  getById: (req, res, next) => {
    ClienteService.findById(req.params.id)
      .then(cliente => {
        if (!cliente) return next(new errors.NotFoundError("Cliente não encontrado"));
        res.send(cliente);
        next();
      })
      .catch(err => next(new errors.InternalServerError(err.message)));
  },

  create: (req, res, next) => {
    ClienteService.create(req.body)
      .then(dados => {
        res.send({ success: true, id: dados[0] });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível criar o cliente")));
  },

  update: (req, res, next) => {
    ClienteService.update(req.params.id, req.body)
      .then(updated => {
        if (!updated) return next(new errors.NotFoundError("Cliente não encontrado"));
        res.send({ success: true });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível atualizar o cliente")));
  },

  remove: (req, res, next) => {
    ClienteService.delete(req.params.id)
      .then(deleted => {
        if (!deleted) return next(new errors.NotFoundError("Cliente não encontrado"));
        res.send({ success: true });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível excluir o cliente")));
  }
};

module.exports = ClienteController;

const errors = require("restify-errors");
const ClienteService = require("../services/clienteService");

const ClienteController = {
  getAll: (req, res, next) => {
    ClienteService.findAll()
      .then(clientes => {
        res.header("Cache-Control", "public, max-age=3600");
        res.send(clientes);
        next();
      })
      .catch(err => next(new errors.InternalServerError(err.message)));
  },

  getById: (req, res, next) => {
    ClienteService.findById(req.params.id)
      .then(cliente => {
        if (!cliente) return next(new errors.NotFoundError("Cliente não encontrado"));
        res.header("Cache-Control", "public, max-age=3600");
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

    const cliente = req.body;

    const obrigatorios = ['nome', 'email']; 

    const faltando = obrigatorios.filter(campo => !(campo in cliente) || cliente[campo] === '');

    if (faltando.length > 0) {
      return next(new errors.BadRequestError(`Campos obrigatórios faltando: ${faltando.join(', ')}`));
    }
    
    ClienteService.update(req.params.id, req.body)
      .then(updated => {
        if (!updated) return next(new errors.NotFoundError("Cliente não encontrado"));
        res.send({ success: true });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível atualizar o cliente")));
  },

  partialUpdate: (req, res, next) => {
    ClienteService.partialUpdate(req.params.id, req.body)
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

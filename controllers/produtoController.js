const errors = require("restify-errors");
const ProdutoService = require("../services/produtoService");

const ProdutoController = {
  getAll: (req, res, next) => {
    ProdutoService.findAll()
      .then(produtos => {
        res.send(produtos);
        next();
      })
      .catch(err => next(new errors.InternalServerError(err.message)));
  },

  getById: (req, res, next) => {
    ProdutoService.findById(req.params.id)
      .then(produto => {
        if (!produto) return next(new errors.NotFoundError("Produto não encontrado"));
        res.send(produto);
        next();
      })
      .catch(err => next(new errors.InternalServerError(err.message)));
  },

  create: (req, res, next) => {
    ProdutoService.create(req.body)
      .then(dados => {
        res.send({ success: true, id: dados[0] });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível criar o produto")));
  },

  update: (req, res, next) => {
    ProdutoService.update(req.params.id, req.body)
      .then(updated => {
        if (!updated) return next(new errors.NotFoundError("Produto não encontrado"));
        res.send({ success: true });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível atualizar o produto")));
  },

  remove: (req, res, next) => {
    ProdutoService.delete(req.params.id)
      .then(deleted => {
        if (!deleted) return next(new errors.NotFoundError("Produto não encontrado"));
        res.send({ success: true });
        next();
      })
      .catch(err => next(new errors.BadRequestError("Não foi possível excluir o produto")));
  }
};

module.exports = ProdutoController;

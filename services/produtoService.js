const produtoRepo = require("../repositories/produtoRepository")

class ProdutoService {
  findAll() {
    return produtoRepo.findAll()
  }
  findById(id) {
    return produtoRepo.findById(id)
  }
  create(data) {
    return produtoRepo.create(data)
  }
  update(id, data) {
    return produtoRepo.update(id, data)
  }
  delete(id) {
    return produtoRepo.delete(id)
  }
}

module.exports = new ProdutoService()

const db = require("../db/connection")

class ProdutoRepository {
  async findAll() {
    return db("produto")
  }

  async findById(id) {
    return db("produto").where("id", id).first()
  }

  async create(produto) {
    return db("produto").insert(produto)
  }

  async update(id, produto) {
    return db("produto").where("id", id).update(produto)
  }

  async delete(id) {
    return db("produto").where("id", id).delete()
  }
}

module.exports = new ProdutoRepository()

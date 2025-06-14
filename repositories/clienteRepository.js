const db = require("../db/connection")

class ClienteRepository {
  async findAll() {
    return db("cliente")
  }

  async findById(id) {
    return db("cliente").where("id", id).first()
  }

  async create(cliente) {
    return db("cliente").insert(cliente)
  }

  async update(id, cliente) {
    return db("cliente").where("id", id).update(cliente)
  }

  async partialUpdate(id, cliente) {
    return db("cliente").where("id", id).update(cliente)
  }

  async delete(id) {
    return db("cliente").where("id", id).delete()
  }
}

module.exports = new ClienteRepository()


const clienteRepo = require("../repositories/clienteRepository")

class ClienteService {
  findAll() {
    return clienteRepo.findAll()
  }
  findById(id) {
    return clienteRepo.findById(id)
  }
  create(data) {
    return clienteRepo.create(data)
  }
  update(id, data) {
    return clienteRepo.update(id, data)
  }
  delete(id) {
    return clienteRepo.delete(id)
  }
}

module.exports = new ClienteService()

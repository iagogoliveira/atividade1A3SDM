const knex = require("knex")

const db = knex({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "",
    database: "loja"
  }
})

module.exports = db
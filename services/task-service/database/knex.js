const knex = require("knex")({

client: "mysql2",

connection: {

    host: "localhost",
    user: "root",
    password: "root123",
    database: "task_manager"

}

})

module.exports = knex
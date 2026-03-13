const knex = require("../database/knex")

async function routes(fastify, options){

fastify.get("/tasks", async () => {

const tasks = await knex("tasks").select("*")

return tasks

})

fastify.post("/tasks", async (request) => {

const {title, description} = request.body

await knex("tasks").insert({

title,
description

})

return {message:"Tarefa criada"}

})

fastify.delete("/tasks/:id", async (request) => {

const { id } = request.params

await knex("tasks")
.where({ id })
.del()

return { message: "tarefa deletada"}

})

fastify.patch("/tasks/:id", async (request) => {

const { id } = request.params

await knex("tasks")
.where({ id })
.update({
    complete: true
})

return { message: "Tarefa concluída"}

})

fastify.put("/tasks/:id", async (request) => {

const { id } = request.params
const {title, description} = request.body

await knex("tasks")
.where({ id })
.update ({
    title,
    description
})

return { message: "tarefa atualizada"}

} )

}

module.exports = routes
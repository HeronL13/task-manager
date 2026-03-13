const fastify = require("fastify")({ logger: true })

const cors = require("@fastify/cors")

const taskRoutes = require("./routes/taskRoutes")

fastify.register(cors, {
  origin: "*"
})

fastify.register(taskRoutes)

fastify.listen({ port: 3002 }, (err) => {
  if (err) throw err
  console.log("Servidor rodando na porta 3002")
})
Task Manager Full Stack

Aplicação de gerenciamento de tarefas desenvolvida como projeto de estudo.

Tecnologias utilizadas

Frontend
- Vue.js
- JavaScript
- CSS

Backend
- Fastify
- Node.js
- Knex

Banco de Dados
- MySQL

Funcionalidades

- Criar tarefas
- Listar tarefas
- Marcar tarefas como concluídas
- Excluir tarefas

Arquitetura

Frontend (Vue)
↓
API REST (Fastify)
↓
Knex
↓
MySQL

Como executar o projeto

Backend

cd services/task-service  
npm install  
node server.js  

Frontend

cd frontend  
npm install  
npm run dev

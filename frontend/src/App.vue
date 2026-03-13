<script setup>

import { ref, onMounted } from "vue"
import TaskList from "./components/TaskList.vue"
import api from "./services/api"

const tasks = ref([])
const title = ref("")
const description = ref("")

async function loadTasks(){
const res = await api.get("/tasks")
tasks.value = res.data
}

async function createTask(){

await api.post("/tasks",{
title:title.value,
description:description.value
})

title.value=""
description.value=""

loadTasks()

}

async function deleteTask(id){

await api.delete(`/tasks/${id}`)

loadTasks()

}

async function completeTask(id){

await api.patch(`/tasks/${id}`)

loadTasks()

}

onMounted(loadTasks)

</script>

<template>

<h1>Task Manager</h1>

<input v-model="title" placeholder="Título"/>
<input v-model="description" placeholder="Descrição"/>

<button class="create-btn" @click="createTask">
Criar tarefa
</button>
<hr>

<TaskList
:tasks="tasks"
@deleteTask="deleteTask"
@completeTask="completeTask"
/>

</template>
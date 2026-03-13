<script setup>

defineProps({
tasks:Array
})

defineEmits(["deleteTask","completeTask"])

</script>

<template>

<div
class="task"
v-for="task in tasks"
:key="task.id"
>

<h3>{{ task.title }}</h3>
<p>{{ task.description }}</p>

<button
class="complete-btn"
@click="$emit('completeTask',task.id)"
>
Concluir
</button>

<button
class="delete-btn"
@click="$emit('deleteTask',task.id)"
>
Deletar
</button>

</div>

</template>
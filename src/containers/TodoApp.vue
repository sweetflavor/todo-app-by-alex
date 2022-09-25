<template>
    <div v-for="item in todoList">
        {{item.todo}}
    </div>
</template>
<script setup>
    import { useTodoStore } from '@/store/todo.ts'
    import { TodoService } from '@/services/todoService'

    const todoStore = useTodoStore()

    const { todoList } = storeToRefs(todoStore)

    onMounted(() => {
        TodoService.init('todoList')
        TodoService.setTodoItem('todoList', {todo: 'Clean desk B', date: new Date})
        todoStore.getTodo()
    })
</script>
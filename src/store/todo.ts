import { defineStore } from 'pinia'
import { TodoService } from '../services/todoService'

interface TodoList {
    [index: number]: { todo: string; createdDate: Date };
}

interface AppStore {
    error: boolean
    todoList: TodoList
}

export const useTodoStore = defineStore('counter', {
  state: (): AppStore => ({
    error: false,
    todoList: []
  }),
  actions: {
    async getTodo() {
        try {
            const { data }: any = await TodoService.getTodoList('todoList')
            
            this.todoList = JSON.parse(data)
            
        } catch {
            this.error = true
        }
    }
  },
})
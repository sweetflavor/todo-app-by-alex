class TodoService {
    static init = (name: string) => {
        const entry = localStorage.getItem(name)

        if (!entry) localStorage.setItem(name, JSON.stringify([]))
    }

    static getTodoList = (name: string) => {
        return new Promise((resolve, reject) :any => {
            resolve({
                data: localStorage.getItem(name)
            })
        })
    }

    static setTodoItem = (name: string, todoItem: Object) => {
        const entry = localStorage.getItem(name)

        if (entry) {
            const list: any = JSON.parse(localStorage.getItem(name))
            const todos = []
            todos.push(todoItem)

            const newTodo = [...list, ...todos]
            console.log(newTodo);
            
            localStorage.setItem(name, JSON.stringify([...[todoItem]]))
        }
    }
}

export { TodoService }
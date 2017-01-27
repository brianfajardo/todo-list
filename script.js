var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos == 0) {
            console.log("Add something todo!");
        } else {
            console.log(this.todos.todoText);
        }
    },
    addTodo: function (newTodo) {
        this.todos.push({
            todoText: newTodo,
            completed: false,
        });
        this.displayTodos();
    },
    changeTodo: function (position, newTodo) {
        this.todos[position].todoText = newTodo
        this.displayTodos();
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
        this.displayTodos()
    }
}
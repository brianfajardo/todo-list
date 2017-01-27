var todoList = {
    todos: [],
    displayTodos: function () {
        this.todos.forEach(function (todo) {
            if (this.todos.length === 0) {
                console.log("Add something to do!");
            } else if (todo.completed === true) {
                console.log("(X)", todo.todoText)
            } else {
                console.log("( )", todo.todoText);
            }
        }, this)
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
    },
    toggleCompleted: function (position) {
        this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();
    },
    toggleAll: function () {
        var totalTodos = this.todos.length;
        var totalCompleted = 0;
        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                totalCompleted++;
            };
        });
        this.todos.forEach(function (todo) {
            if (totalCompleted === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });
        this.displayTodos();
    }
}
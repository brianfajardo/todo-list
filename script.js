var todoList = {
    todos: [],
    displayTodos: function () {
        if (this.todos.length === 0) {
            console.log("Add something to do!");
        } else {
            this.todos.forEach(function (todo) {
                if (todo.completed === true) {
                    console.log("(X)", todo.todoText)
                } else {
                    console.log("( )", todo.todoText);
                }
            });
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
        this.todos[position].todoText = newTodo;
        this.todos[position].completed = false;
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

var handlers = {
    displayTodos: function () {
        todoList.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
    },
    addTodo: function () {
        var addTodoInputText = document.getElementById('addTodoInputText');
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = "";
    },
    changeTodo: function () {
        var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
        var changeTodoInputText = document.getElementById('changeTodoInputText');
        todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
        changeTodoInputPosition.value = "";
        changeTodoInputText.value = "";
    },
    deleteTodo: function () {
        var deleteTodoInputPosition = document.getElementById('deleteTodoInputPosition');
        todoList.deleteTodo(deleteTodoInputPosition.valueAsNumber);
        deleteTodoInputPosition.value = "";
    },
    toggleCompleted: function () {
        var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
        todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
        toggleCompletedInputPosition.value = "";
    }
}

var view = {
    displayTodos: function () {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = "";
        todoList.todos.forEach(function (todo) {
            var todoLi = document.createElement('li');
            var todoTextCompletedStatus = "";
            if (todo.completed === true) {
                todoTextCompletedStatus = "(X) " + todo.textText;
            } else {
                todoTextCompletedStatus = "( ) " + todo.todoText;
            }
            todoLi.textContent = todoTextCompletedStatus;
            todoUl.appendChild(todoLi);
        })
    },
}
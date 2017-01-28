var todoList = {
    todos: [],
    addTodo: function (newTodo) {
        this.todos.push({
            todoText: newTodo,
            completed: false,
        });
    },
    changeTodo: function (position, newTodo) {
        this.todos[position].todoText = newTodo;
        this.todos[position].completed = false;
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (position) {
        this.todos[position].completed = !this.todos[position].completed;
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
    }
}

var handlers = {
    addTodo: function () {
        var addTodoInputText = document.getElementById('addTodoInputText');
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = "";
        view.displayTodos();
    },
    changeTodo: function () {
        var changeTodoInputPosition = document.getElementById('changeTodoInputPosition');
        var changeTodoInputText = document.getElementById('changeTodoInputText');
        todoList.changeTodo(changeTodoInputPosition.valueAsNumber, changeTodoInputText.value);
        changeTodoInputPosition.value = "";
        changeTodoInputText.value = "";
        view.displayTodos();
    },
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
        todoList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
        toggleCompletedInputPosition.value = "";
        view.displayTodos();
    },
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },
}

var view = {
    displayTodos: function () {
        var todoUl = document.querySelector('ul');
        todoUl.innerHTML = "";
        todoList.todos.forEach(function (todo, position) {
            var todoLi = document.createElement('li');
            var todoTextCompletedStatus = "";
            if (todo.completed === true) {
                todoTextCompletedStatus = "(x) " + todo.todoText;
            } else {
                todoTextCompletedStatus = "( ) " + todo.todoText;
            };
            todoLi.id = position;
            todoLi.textContent = todoTextCompletedStatus;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }, this)
    },
    createDeleteButton: function () {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    deleteButtonEventListener: function () {
        var todosUl = document.querySelector('ul');
        todosUl.addEventListener('click', function (event) {
            var elementClicked = event.target;
            if (elementClicked.className === "deleteButton") {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        })
    }
}

view.deleteButtonEventListener()
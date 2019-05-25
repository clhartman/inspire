import TodoService from "./TodoService.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	console.log("todos:", todos)
	let template = ''
	todos.forEach(todo => {
		template += todo.Template
	})
	document.getElementById("incomplete-tasks").innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
		// Don't forget to add your subscriber
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target //html element that triggered the form submission
		var todo = {
			description: form.todo.value
		}
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}

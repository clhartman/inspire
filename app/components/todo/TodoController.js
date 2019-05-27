import TodoService from "./TodoService.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	let template = ''
	let todoCount = 0
	todos.forEach(todo => {
		if (todo.completed == false) {
			todoCount++
		}
		template += todo.Template
	})
	document.getElementById("incomplete-tasks").innerHTML = template
	document.getElementById("incomplete-count").innerHTML = todoCount
}



function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.todo.value
		}
		_todoService.addTodo(todo)
		form.todo.value = ''
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
	}



}

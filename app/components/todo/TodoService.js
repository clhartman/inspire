import Todo from "../../models/Todo.js";

// @ts-ignore

//Private
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Courtney/todos',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}


//Public

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos.map(t => new Todo(t))
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				console.log(res)
				let newTodo = new Todo(res.data.data)
				let todos = [..._state.todos, newTodo]
				_setState('todos', todos)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed //flips the bool
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()

			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}

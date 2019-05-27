export default class Todo {
  constructor(data) {
    this._id = data._id || ''
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
    console.log('here is the model Class')
  }

  get Template() {
    return `
        <p>		<input class="form-check" name="incomplete-todo" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')"> <label class="form-check-label ${this.completed ? 'strikethrough' : ''}">${this.description}</label><span onclick="app.controllers.todoController.removeTodo('${this._id}')">
      <i class="far fa-trash-alt"></i>
        </p>
    `


  }



}

/* <div class="form-check">
  <input class="form-check-input" type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
    <label class="form-check-label ${this.completed ? 'strikethrough' : ''}">
      ${this.description}
    </label>

    </span>
			</div>  */
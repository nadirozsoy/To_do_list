const form = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo')
const secondCardBody = document.querySelectorAll('.card-body')[1]
const filter = document.querySelector('#filter')
const clearButton = document.querySelector('#clear-todos')
const todoList = document.querySelector('.list-group')

const ui = new UI()

eventListeners()

function eventListeners() {
  form.addEventListener('submit', addTodo)
  document.addEventListener('DOMContentLoaded', getAllTodos)
}
function addTodo(a) {
  const newTodo = todoInput.value.trim()
  if (newTodo === '') {
    ui.displayMessages('Please do not leave the field blank!', 'danger')
  } else {
    ui.addTodoToUI(newTodo)
    ui.displayMessages('Successfully added!', 'success')
    Storage.addTodoToStorage(newTodo)
  }

  ui.clearInput(todoInput)
  a.preventDefault()
}
function getAllTodos() {
  let todos = Storage.getTodoFromStorage()
  todos.forEach((todo) => {
    todoList.innerHTML += `<li class="list-group-item d-flex justify-content-between">
        ${todo}
        <a href = "#" class ="delete-item">
            <i class = "fa fa-remove"></i>
        </a>

    </li>
        `
  })
}

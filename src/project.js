const form = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const filter = document.querySelector('#filter')
const clearButton = document.querySelector('#clear-todos')

const ui = new UI()

eventListeners()

function eventListeners() {
  form.addEventListener('submit', addTodo)
}
function addTodo(a) {
  const newTodo = todoInput.value.trim()
  ui.addTodoToUI(newTodo)

  ui.clearInput(todoInput)
  a.preventDefault()
}

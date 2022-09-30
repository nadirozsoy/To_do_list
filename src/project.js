const form = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo')
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
  if (newTodo === '') {
    ui.displayMessages('Please do not leave the field blank!', 'danger')
  } else {
    ui.addTodoToUI(newTodo)
    ui.displayMessages('Successfully added!', 'success')
  }

  ui.clearInput(todoInput)
  a.preventDefault()
}

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
  // document.addEventListener('DOMContentLoaded', getAllTodos)
  secondCardBody.addEventListener('click', deleteTodo)
  filter.addEventListener('keyup', filterTodos)
  clearButton.addEventListener('click', clearAllTodos)
}
function addTodo(a) {
  const newTodo = todoInput.value.trim()
  if (newTodo === '') {
    ui.displayMessages('Please do not leave the field blank!', 'danger')
  } else {
    ui.addTodoToUI(newTodo)
    Storage.addTodoToStorage(newTodo)
    ui.displayMessages('Successfully added!', 'success')
  }

  ui.clearInput(todoInput)
  a.preventDefault()
}
// function getAllTodos() {
//   let todos = Storage.getTodoFromStorage()
//   todos.forEach((todo) => {
//     ui.loadAllTodos(todo)
//   })
// }
function deleteTodo(b) {
  if (b.target.className === 'fa fa-remove') {
    ui.deleteTodoFromUI(b.target)
    Storage.deleteTodoFromStorage(
      b.target.parentElement.parentElement.textContent
    )
    ui.displayMessages('Successfully deleted!', 'warning')
  }
}
function filterTodos(c) {
  const filterValue = c.target.value.toLowerCase()
  const listItems = document.querySelectorAll('.list-group-item')
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase()
    if (text.indexOf(filterValue) === -1) {
      listItem.setAttribute('style', 'display:none !important')
    } else {
      listItem.setAttribute('style', 'display:block')
    }
  })
}
function clearAllTodos() {
  if (confirm('Clear All Todos?')) {
    Storage.clearAllTodosFromStorage()
    ui.clearAllTodosFromUI()
  }
}

class UI {
  constructor() {
    this.todoList = document.querySelector('.list-group')
  }
  addTodoToUI(newTodo) {
    const listItem = document.createElement('li')
    let todo = Storage.getTodoFromStorage()
    if (todo.indexOf(newTodo) === -1) {
      listItem.innerHTML += `
    <li class="list-group-item d-flex justify-content-between">
        ${newTodo}
        <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
        </a>
    </li>`
      this.todoList.appendChild(listItem)
    }
  }
  clearInput(e1) {
    e1.value = ''
  }
  displayMessages(message, type) {
    const cardBody = document.querySelector('.card-body')
    const div = document.createElement('div')
    div.className = `alert alert-${type}`
    div.textContent = `${message}`
    cardBody.appendChild(div)
    setTimeout(() => {
      div.remove()
    }, 1500)
  }
}

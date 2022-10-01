class UI {
  constructor() {
    this.todoList = document.querySelector('.list-group')
  }
  addTodoToUI(newTodo) {
    let todos = Storage.getTodoFromStorage()
    if (todos.indexOf(newTodo) === -1) {
      const listItem = document.createElement('li')
      listItem.className = 'list-group-item d-flex justify-content-between'
      listItem.appendChild(document.createTextNode(newTodo))

      const link = document.createElement('a')
      link.href = '#'
      link.className = 'delete-item'

      const item = document.createElement('i')
      item.className = 'fa fa-remove'

      link.appendChild(item)
      listItem.appendChild(link)
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
  deleteTodoFromUI(x) {
    x.parentElement.parentElement.remove()
  }
  clearAllTodosFromUI() {
    while (this.todoList.firstElementChild !== null) {
      this.todoList.firstElementChild.remove()
    }
  }
  // loadAllTodos(todo) {
  //   todo.forEach((todoo) => {
  //     this.todoList.innerHTML += `<li class="list-group-item d-flex justify-content-between">
  //     ${todo}
  //     <a href = "#" class ="delete-item">
  //         <i class = "fa fa-remove"></i>
  //     </a>

  // </li>
  //     `
  //   })
  // }
}

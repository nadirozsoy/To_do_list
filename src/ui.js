class UI {
  constructor() {
    this.todoList = document.querySelector('.list-group')
  }
  addTodoToUI(newTodo) {
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //    <a href = "#" class ="delete-item">
    //       <i class = "fa fa-remove"></i>
    //    </a>
    //</li>
    const listItem = document.createElement('li')
    listItem.innerHTML += `<li class="list-group-item d-flex justify-content-between">
                             ${newTodo}
        <a href = "#" class ="delete-item">
           <i class = "fa fa-remove"></i>
        </a>
    </li>`
    // listItem.className = 'list-group-item d-flex justify-content-between'
    // listItem.appendChild(document.createTextNode(newTodo))

    // const link = document.createElement('a')
    // link.href = '#'
    // link.className = 'delete-item'

    // const item = document.createElement('i')
    // item.className = 'fa fa-remove'

    // link.appendChild(item)
    // listItem.appendChild(link)
    this.todoList.appendChild(listItem)
  }
  clearInput(e1) {
    e1.value = ''
  }
}

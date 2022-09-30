class Storage {
  static getTodoFromStorage() {
    let todo
    if (localStorage.getItem('todos') === null) {
      todo = []
    } else {
      todo = JSON.parse(localStorage.getItem('todos'))
    }
    return todo
  }
  static addTodoToStorage(newTodo) {
    let todo = this.getTodoFromStorage()
    if (todo.indexOf(newTodo) === -1) {
      todo.push(newTodo)
    }
    localStorage.setItem('todos', JSON.stringify(todo))
  }
  static clearAllTodosFromStorage() {
    localStorage.removeItem('todos')
  }
}

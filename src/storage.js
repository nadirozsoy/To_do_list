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
    let todos = this.getTodoFromStorage()
    if (todos.indexOf(newTodo) === -1) {
      todos.push(newTodo)
    }
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  //   static clearAllTodosFromStorage() {
  //     localStorage.removeItem('todos')
  //   }
  static deleteTodoFromStorage(deletetodo) {
    let todos = this.getTodoFromStorage()
    todos.forEach((todo, index) => {
      if (todo === deletetodo) {
        todos.splice(index, 1)
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  static clearAllTodosFromStorage() {
    localStorage.removeItem('todos')
  }
}

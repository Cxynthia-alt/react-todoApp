import React from 'react';

const Todo = ({ item, todoList, setTodoList, id }) => {
  const removeItem = () => {
    const filteredlist = todoList.filter(todo => todo.id !== id)
    setTodoList(filteredlist)
  }
  return (
    <div>
      <li>{item}</li>
      <button onClick={removeItem}>X</button>
    </div>
  )
}

export default Todo
